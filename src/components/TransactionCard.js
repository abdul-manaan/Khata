import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, TextInput, Title} from 'react-native-paper'
import {Dropdown} from "react-native-material-dropdown";
import {currentGroupMembers} from "./groupscreensflow";
import {get_user} from "./data";
import {updateData} from "./transactionscreenflow";

export default class TransactionCard extends React.Component {
    state = {
        mems: currentGroupMembers,
        amount: 0,
        to:'',
        from:'',
        toEm: '',
        fromEm: '',
    };


    handleInput = (text) => {
        this.setState({amount: text})
    };



    render() {

        // let data = [{
        //     value: 'Banana',
        //     valueEm: '',
        // }, {
        //     value: 'Mango',
        // }, {
        //     value: 'Pear',
        // }];

        let mapping = {};
        let data = [];
        currentGroupMembers.forEach(cgm => {
           data.push({value: cgm['profile']['name']})
            mapping[cgm['profile']['name']] = cgm['profile']['email'];
        });


        return (
            <View>
               <Card style={styles.cardStyle}>
                    <Card.Content>
                        <Dropdown
                            label="From"
                            data={data}
                            onChangeText={(text) =>
                            {
                                this.state.from = text;
                                updateData({[this.props.id]: {'to': this.state.to, 'from': this.state.from, 'amount': this.state.amount, 'toEm': mapping[this.state.to], 'fromEm': mapping[this.state.from]}});
                            }}
                            value={this.state.from}
                        />
                        <Dropdown
                            label="To"
                            data={data}
                            onChangeText={(text) => {
                                updateData({[this.props.id]: {'to': this.state.to, 'from': this.state.from, 'amount': this.state.amount, 'toEm': mapping[this.state.to], 'fromEm': mapping[this.state.from]}});
                                this.state.to = text;
                            }}
                            value={this.state.to}
                        />
                        <TextInput style={styles.textBox}
                                   keyboardType='numeric'
                                   label= "Amount (Rs.)"
                                   onChangeText={(text) => {
                                       this.handleInput(text);
                                       this.state.amount = text;
                                       updateData({[this.props.id]: {'to': this.state.to, 'from': this.state.from, 'amount': this.state.amount, 'toEm': mapping[this.state.to], 'fromEm': mapping[this.state.from]}});
                                   }}
                                   value={this.state.amount}
                        />
                    </Card.Content>
                </Card>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    textBox:{
        marginLeft: 8,
        marginRight: 8,
        marginTop: 40,
    },
    cardStyle:{
        marginLeft: 8,
        marginRight: 8,
        marginTop: 5,
    }
});
