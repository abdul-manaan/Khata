import React from 'react';
import AppBar from "./AppBar";
import {StyleSheet, TouchableOpacity, View,ScrollView} from 'react-native';
import {Card, FAB, TextInput, Title} from 'react-native-paper';
import {update_rgn} from "./data";
import ApprovalCard from "./ApprovalCard";

export default class Approval extends React.Component {

    state = {numOfCards:1};
    transactionData = [];


    render() {
        return (
            <View style={styles.main}>
                <AppBar
                    navigation={this.props.navigation}
                    title='Transaction Approval'
                    subtitle='Transaction Approval Details'/>
                <ApprovalCard/>
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
        fontSize: 15,
        marginTop: 6,
        fontWeight: 'bold',
        color: 'black'
    },
    confirmButton: {
        bottom: 0,
        backgroundColor: '#aa2200',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 40,
        marginBottom: 20,
        height: 60,
    },
    cardStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'blue',
        marginTop: 15,
        marginLeft: 8,
        marginRight: 8,
    },
    textBox:{
        marginLeft: 8,
        marginRight: 8,
        marginTop: 40,
    },
    add: {
        marginTop: 16,
        right: 0,
        marginLeft:'85%',
        backgroundColor:'#aa0022',
        width:'12%',
    },

});
