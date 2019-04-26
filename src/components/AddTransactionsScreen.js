import React from 'react';
import AppBar from "./AppBar";
import {StyleSheet, TouchableOpacity, View,ScrollView} from 'react-native';
import {Card, FAB, TextInput, Title} from 'react-native-paper';
import {update_rgn} from "./data";
import TransactionCard from "./TransactionCard";

export default class newTransacrionScreen extends React.Component {

    state = {numOfCards:1};
    transactionData = [];

    createTransaction = () => {
        let table =[];
        for(let i =0; i< this.state.numOfCards; i++){
            table.push(<TransactionCard id={i} />)
        }
        return table;
    }

    render() {
        return (
            <View style={styles.main}>
                <AppBar
                    navigation={this.props.navigation}
                    title='Transaction'
                    subtitle='Transaction Details'/>
                <ScrollView>
                    {this.createTransaction()}
                    <FAB
                        style={styles.add}
                        small={true}
                        icon="add"
                        color="white"
                        onPress={() => {this.setState({numOfCards:this.state.numOfCards+1})}}
                    />
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AddGroup')}>
                        <Card style={styles.confirmButton}>
                            <Card.Content>
                                <Title style={{textAlign: 'center', color: 'white',}}> Confirm </Title>
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>
                </ScrollView>
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
