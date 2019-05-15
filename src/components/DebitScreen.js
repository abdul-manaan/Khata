import React from 'react';
import AppBar from "./AppBar";
import {StyleSheet, TouchableOpacity, View,Text} from 'react-native';
import {Card, TextInput,Button} from 'react-native-paper';

import {ListItem} from "react-native-elements";
import {Dropdown} from "react-native-material-dropdown";

export default class DebitScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {data:[], friend:'', amount:{}, debitAmount: 0, amountToDebit:0};
        this.state.data = [{value:'Ali'}, {value:'Ahmed'}];
        this.state.amount = {'Ali':10, 'Ahmed':20};
    }

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
                    onChangeText={(text)=> this.state.amountToDebit = text}
                    style={styles.textBoxStyle}
                />}

                {!this.state.friend || <Card style={styles.cardStyle}>
                    <Button style={styles.buttonStyle} onPress={() => console.log('Pressed')}>
                        {<Text style={styles.buttonText}>Confirm Debit</Text>}
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
