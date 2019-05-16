import React from 'react';
import AppBar from "./AppBar";
import {StyleSheet,  View,Text} from 'react-native';
import {Card, Button} from 'react-native-paper';

import {ListItem} from "react-native-elements";
import {Dropdown} from "react-native-material-dropdown";
import {CurrentUser} from "./data";

export default class CreditScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {data:[], friend:'', amount:{}, debitAmount: 0, amountToDebit:0};
        this.state.data = [{value:'Fetching...'}];
        this.state.amount = {'Fetching...':0,};

        setTimeout(() => this.fetchDebits(),500);
    }

    fetchDebits = () =>{
        // console.log(CurrentUser, "fddfdsds")
        if('payables' in CurrentUser){
            let debit = CurrentUser['payables'];

            //debit is list of objects

            let tempData = [];
            let tempAmount = {};

            debit.forEach(k => {
                tempData.push({value: k['from_name']});
                tempAmount[k['from_name']] = k['amount'];
            });

            this.setState({data: tempData, amount: tempAmount});
        }
        else{
            // console.log('F***', CurrentUser)
        }
    };

    render() {
        return (
            <View style={styles.main}>
                <AppBar
                    navigation= {this.props.navigation}
                    title     = 'Credit Amount'
                    subtitle  = ''/>

                <Card style={styles.cardStyle}>
                    <Dropdown
                        style={styles.dropdownStyle}
                        label="   Friend"
                        data={this.state.data}
                        onChangeText={(text) =>
                        {
                            this.state.friend = text;
                            this.setState({creditAmount: this.state.amount[text]});
                        }}
                        value={this.state.friend}
                    />
                    <ListItem
                        leftIcon = {<Text> {'Credit Amount'} </Text>}
                        rightIcon = {<Text style={styles.amount}> {'\u0024'} { this.state.creditAmount || 0}</Text>}
                    />

                </Card>


                {!this.state.friend || <Card style={styles.cardStyle}>
                    <Button style={styles.buttonStyle} onPress={() => alert('Pinging Server Not Ready')}>
                        {<Text style={styles.buttonText}>Ping {this.state.friend}</Text>}
                    </Button>
                </Card>}

            </View>
        );
    }


}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'antiquewhite',
    },
    name: {
        fontSize: 20,
        marginTop: 6,
        color: 'black',
        textAlign: 'right',
    },

    cardStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'blue',
        marginTop: 5,
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 5,
    },

    amount:{
        fontSize: 29,
        textAlign: 'right',
        marginRight:10,
    },
    lifeStyle : {
        fontSize: 19,
        marginLeft:10,
        marginBottom: 8,
        marginTop:5,
    },
    dropdownStyle:{
        marginLeft:10,
    },
    buttonStyle:{
        backgroundColor:'#aa2200',
    },

    buttonText:{
        color: 'white',
        fontSize: 20,
    },
    textBoxStyle:{
        margin: 8,
    }

});
