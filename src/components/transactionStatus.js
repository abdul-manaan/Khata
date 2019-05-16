import React from 'react';
import AppBar from "./AppBar";
import {StyleSheet, TouchableOpacity, View,Text,ActivityIndicator} from 'react-native';
import {Card, TextInput, Title} from 'react-native-paper';
import {updateGist} from "./transactionscreenflow";
import {Icon,ListItem} from "react-native-elements";
import {auth, db} from '../config';
import {CurrentUser, add_group_transactions} from "./data";
import {gist,data, CurrentTransaction} from "./transactionscreenflow";
import {setState} from "theme-provider";

export default class transactionStatus extends React.Component {

    //state = {"listA":[]};
    constructor(props){
        super(props);
        let list = [];
        Object.keys(data).forEach(a => {list.push(data[a].to, data[a].from)});

        let allUsers = new Set(list);
        let listB = [];
        allUsers.forEach(a => {
            if(a === CurrentUser['profile']['name']){
                listB.push({title:a, status:1,})
            }
            else{
                listB.push({title:a, status:3})
            }
        });

        this.state = {'listA': listB};
        //this.setState({"listA":listB});
        // console.log('Flag 1', CurrentUser);

        let temp = 'users/'+CurrentUser['profile']['email'].hashCode()+'/responseList/'+gist.hashCode();
        // console.log(temp);
        db.ref('users/'+CurrentUser['profile']['email'].hashCode()+'/responseList/'+gist.hashCode()).on('value',snapshot => {
            // console.log('Hello');
            let responseList = snapshot.val();
            if(responseList === null)
                return;
            // console.log(responseList);
            responseList.forEach(a => {
                for (let i=0; i< listB.length; i++){
                    if(listB[i].title === a.name){
                        listB[i].status = a.response;
                    }
                }
            });

            let ok = 1;
            listB.forEach(l => {
                if(l['status'] !== 1){
                    ok = 0
                }
            });

            if(ok){
                //groupID
                //{
                //  'creator_id'
                //  'time',
                //  'description',
                //  'list': {
                //      1: {to: , from: , status: , amount: ,}
                //   }
                // }

                add_group_transactions(CurrentTransaction['groupID'], CurrentTransaction)
            }

            this.setState({"listA":listB});

        });

    }


    icons = {   1:{name:'check', color:'green'},
                2:{name:'close', color:'red'},
            };
    render() {
        // console.log(this.state.listA);
        return (
        <View style={styles.main}>
            <AppBar
                navigation={this.props.navigation}
                title='Transaction'
                subtitle='Status of your transaction'/>


            { this.state.listA.map((item, i) => (
                <ListItem style={styles.cardStyle}
                          key={i}
                          title={item.title}
                          rightIcon= {this.icons[item.status] || <ActivityIndicator size="small" color="#ffb200" />}
                />
            ))}


            <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                <Card style={styles.confirmButton}>
                    <Card.Content>
                        <Title style={{textAlign: 'center', color: 'white',}}> Go to Home </Title>
                    </Card.Content>
                </Card>
            </TouchableOpacity>
        </View>
    );
    }


    // listA = [
    //     {
    //         title: 'Usman',
    //         status: 1
    //     },
    //     {
    //         title: 'Haseeb',
    //         status: 2
    //     },
    //     {
    //         title: 'Muzammil',
    //         status: 3
    //     }
    // ];
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'antiquewhite',
    },
    name: {
        fontSize: 15,
        marginTop: 6,
        fontWeight: 'bold',
        color: 'black'
    },
    confirmButton: {
        bottom: 0,
        backgroundColor: '#aa2200',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 20,
        height: 45,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'blue',
        marginTop: 5,
        marginLeft: 8,
        marginRight: 8,
    },
    textBox: {
        marginLeft: 8,
        marginRight: 8,
        marginTop: 40,
    },
    row:{
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
    }

});
