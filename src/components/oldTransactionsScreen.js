import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Card, Paragraph, Title} from 'react-native-paper';
import AppBar from "./AppBar";

export default class oldTransactionsScreen extends React.Component {

    state = {
        transactions : []
    };

    // dic = {};
    //
    // _fetch_transactions = async () => {
    //     console.log('Fetching....');
    //     let transactionsList = await get_group_transactions(groupToShow['name']);
    //     await Promise.all(transactionsList.forEach(async g => {
    //         this.dic[g['trans'][0]] = await get_transaction(g['trans'][0]);
    //         //Issue Here
    //     }));
    //
    //     console.log('transactionsList: ', transactionsList);
    //     console.log('dic', this.dic);
    //     this.setState({transactions: transactionsList})
    // };

    render() {
        // this._fetch_transactions();

        return (
            <View style={styles.main}>
                <AppBar navigation={this.props.navigation} title='Transactions History' subtitle='previous transactions of your group'/>
                {
                    this.state.transactions.map(t =>
                        <Card  style={styles.cardStyle}>
                            <Card.Content>
                                <Title>Old 1</Title>
                                {/*<Text>From: {(this.dic[t['trans'][0]])['from']}</Text>*/}
                            </Card.Content>
                        </Card>
                    )
                }
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
    main: {
        flex: 1,
        backgroundColor: 'antiquewhite',
    },
});
