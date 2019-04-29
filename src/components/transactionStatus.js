import React from 'react';
import AppBar from "./AppBar";
import {StyleSheet, TouchableOpacity, View,Text,ActivityIndicator} from 'react-native';
import {Card, TextInput, Title} from 'react-native-paper';
import {updateGist} from "./transactionscreenflow";
import {Icon,ListItem} from "react-native-elements";

export default class newTransacrionScreen extends React.Component {

    state = {};


    icons = {   1:{name:'check', color:'green'},
                2:{name:'close', color:'red'},
            }
    listA = [
        {
            title: 'Usman',
            status: 1
        },
        {
            title: 'Haseeb',
            status: 2
        },
        {
            title: 'Muzammil',
            status: 3
        }
    ];

    render() {
        return (
            <View style={styles.main}>
                <AppBar
                    navigation={this.props.navigation}
                    title='Transaction'
                    subtitle='Status of your transaction'/>


                { this.listA.map((item, i) => (
                        <ListItem style={styles.cardStyle}
                            key={i}
                            title={item.title}
                            rightIcon= {this.icons[item.status] || <ActivityIndicator size="small" color="#ffb200" />}
                    />
                        ))}


                <TouchableOpacity onPress={() => this.props.navigation.navigate('Home')}>
                    <Card style={styles.confirmButton}>
                        <Card.Content>
                            <Title style={{textAlign: 'center', color: 'white',}}> Go to Home </Title>
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
        backgroundColor: '#aa2200',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 20,
        height: 60,
        // position: 'absolute',
    },
    cardStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'blue',
        marginTop: 5,
        marginLeft: 8,
        marginRight: 8,
    },
    textBox: {
        marginLeft: 8,
        marginRight: 8,
        marginTop: 40,
    },
    row:{
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 8,
    }

});
