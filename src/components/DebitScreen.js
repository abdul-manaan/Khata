import React from 'react';
import AppBar from "./AppBar";
import {StyleSheet, TouchableOpacity, View,Text} from 'react-native';
import {Card, TextInput,Button} from 'react-native-paper';

import {ListItem} from "react-native-elements";
import {Dropdown} from "react-native-material-dropdown";
import {CurrentUser, update_transaction_amount} from "./data";

export default class DebitScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {data:[], friend:'', amount:{}, debitAmount: 0, amountToDebit:0};
        this.state.data = [{value:'Fetching...'}];
        this.state.amount = {'Fetching...':0,};
        this.state.currTID = 0;

        setTimeout(() => this.fetchDebits(),500);
    }

    dic = {};
    TMAP = {};
    fetchDebits = () =>{
        // console.log(CurrentUser, "fddfdsds");
        if('recievables' in CurrentUser){
            let debit = CurrentUser['recievables'];

            //debit is list of objects

            let tempData = [];
            let tempAmount = {};

            debit.forEach(k => {
                tempData.push({value: k['to_name']});
                tempAmount[k['to_name']] = k['amount'];
                this.TMAP[k['to_name']] = k['transaction_id'];
            });

            this.setState({data: tempData, amount: tempAmount});
        }
        else{
            // console.log('F***', CurrentUser)
        }
    };

    updateDebit = () => {
        let temp = {id: this.TMAP[this.dic['name']], debit: this.dic['amountToDebit']};
        // console.log(temp);
        update_transaction_amount(temp['id'], temp['debit']);
        alert(`${temp['debit']} received!`)
        this.props.navigation.navigate('DebitCreditScreen')
    };
    render() {
        return (
            <View style={styles.main}>
                <AppBar
                    navigation= {this.props.navigation}
                    title     = 'Debit Amount'
                    subtitle  = ''/>

                <Card style={styles.cardStyle}>
                    <Dropdown
                        style={styles.dropdownStyle}
                        label="   Friend"
                        data={this.state.data}
                        onChangeText={(text) =>
                        {
                            this.state.friend = text;
                            this.dic['name'] = text;
                            this.setState({debitAmount: this.state.amount[text]});
                        }}
                        value={this.state.friend}
                    />
                    <ListItem
                        leftIcon = {<Text> {'Debit Amount'} </Text>}
                        rightIcon = {<Text style={styles.amount}> {'\u0024'} { this.state.debitAmount || 0}</Text>}
                    />

                </Card>
                {!this.state.friend || <TextInput
                    label={'Enter the amount you want to debit'}
                    maxLength={10}
                    keyboardType={'numeric'}
                    onChangeText={(text)=> {
                        this.state.amountToDebit = text;
                        this.dic['amountToDebit'] = text;
                        this.setState({amountToDebit: text})
                    }}
                    style={styles.textBoxStyle}
                    value={this.state.amountToDebit}
                />}
                {!this.state.friend || <Button style={styles.buttonStyle} onPress={() => this.updateDebit()}>
                    {<Text style={styles.buttonText}>Confirm Debit</Text>}
                </Button>}

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

    buttonText:{
        color: 'white',
        fontSize: 20,
    },
    textBoxStyle:{
        margin: 8,
    }

});
