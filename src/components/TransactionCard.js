import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, TextInput, Title} from 'react-native-paper'
import {Dropdown} from "react-native-material-dropdown";

export default class TransactionCard extends React.Component {
    state = {amount: 0,to:'',from:''};


    handleInput = (text) => {
        this.setState({amount: text})
    };
    render() {
        let data = [{
            value: 'Banana',
        }, {
            value: 'Mango',
        }, {
            value: 'Pear',
        }];

        return (
            <View>
               <Card style={styles.cardStyle}>
                    <Card.Content>
                        <Dropdown
                            label="From"
                            data={data}
                            onChangeText={(text) => {this.state.from = text;}}
                            value={this.state.from}
                        />
                        <Dropdown
                            label="To"
                            data={data}
                            onChangeText={(text) => {this.state.to = text;}}
                            value={this.state.to}
                        />
                        <TextInput style={styles.textBox}
                                   keyboardType='numeric'
                                   label= "Amount (Rs.)"
                                   onChangeText={(text) => this.handleInput(text)}
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
