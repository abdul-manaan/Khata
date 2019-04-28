import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Card, Paragraph, Title} from 'react-native-paper';
import {groupToShow} from "./groupscreensflow";
import {get_group_transactions} from "./data";

export default class oldTransactionsScreen extends React.Component {

    state = {
        transactions : []
    };

    _fetch_transactions = async () => {
        let transactionsList = await get_group_transactions(groupToShow);

    };

    render() {
        this._fetch_transactions();

        return(
            <View>

            </View>
        );
    }
}


const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'blue',
        //borderBottomWidth: 2,
        marginTop: 3,
        marginLeft: 8,
        marginRight: 8,
    },
});
