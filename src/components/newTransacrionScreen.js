import React from 'react';
import AppBar from "./AppBar";
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, TextInput, Title} from 'react-native-paper';
import {updateGist} from "./transactionscreenflow";

export default class newTransacrionScreen extends React.Component {

    state = {};


    handleInput = (g) => {
        //this.setState({[inp]});
        // update_rgn(inp);
        updateGist(g);
    };

    render() {
        return (
            <View style={styles.main}>
                <AppBar
                    navigation={this.props.navigation}
                    title='Transaction'
                    subtitle='Create a new transaction'/>

                <TextInput style={styles.textBox}
                           placeholder="Enter gist about this transaction"
                           onChangeText={(text) => this.handleInput(text)}
                />

                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddTransaction')}>
                    <Card style={styles.confirmButton}>
                        <Card.Content>
                            <Title style={{textAlign: 'center', color: 'white',}}> Next </Title>
                        </Card.Content>
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
        fontSize: 15,
        marginTop: 6,
        fontWeight: 'bold',
        color: 'black'
    },
    confirmButton: {
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
        // position: 'absolute',
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
    }

});
