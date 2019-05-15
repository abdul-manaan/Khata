import React from 'react';
import AppBar from "./AppBar";
import {StyleSheet, TouchableOpacity, View,Text} from 'react-native';
import {Card,  } from 'react-native-paper';

import Icon from 'react-native-vector-icons/AntDesign';
import {ListItem} from "react-native-elements";

export default class DebitCreditScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {debitAmount:1202,creditAmount:100}
    }


    render() {
        return (
            <View style={styles.main}>
                <AppBar
                    navigation= {this.props.navigation}
                    title     = 'Dashboard'
                    subtitle  = ''/>

                <TouchableOpacity onPress={() => this.props.navigation.navigate('DebitScreen')}>
                    <Card style={styles.cardStyle}>
                        <ListItem

                        leftIcon = {<Icon size={40} color={'#aa2200'} name="wallet" />}
                        rightIcon = {<Text style={styles.name}>Debit</Text>}/>
                        <Text style={styles.amount}> {'\u0024'} {this.state.debitAmount}</Text>
                        <View
                            style={{
                                borderBottomColor: '#D3D3D3',
                                borderBottomWidth: 1,
                            }}
                        />
                        <Text style={styles.lifeStyle}>{<Icon size={20} name={'calendar'}/>} {'In Lifetime'}</Text>
                    </Card>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('CreditScreen')}>
                    <Card style={styles.cardStyle}>
                        <ListItem

                            leftIcon = {<Icon size={40} color={'#aa2200'} name="warning" />}
                            rightIcon = {<Text style={styles.name}>Credit</Text>}/>
                        <Text style={styles.amount}> {'\u0024'} {this.state.creditAmount}</Text>
                        <View
                            style={{
                                borderBottomColor: '#D3D3D3',
                                borderBottomWidth: 1,
                            }}
                        />
                        <Text style={styles.lifeStyle}>{<Icon size={20} name={'calendar'}/>} {'In Lifetime'}</Text>
                    </Card>
                </TouchableOpacity>
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
    }

});
