import React from 'react';
import AppBar from "./AppBar";
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Card, TextInput, Title} from 'react-native-paper';
import {update_rgn} from "./data";

export default class GroupName extends React.Component {

    state = {};


    handleInput = (inp) => {
        //this.setState({[inp]});
        update_rgn(inp); //recent group name
    };

    render() {
        return (
            <View style={styles.main}>
                <AppBar
                    navigation={this.props.navigation}
                    title='Group Name'
                  subtitle='Enter group name'/>

                        <TextInput style={styles.textBox}
                                   placeholder="Enter your Group Name"
                                   onChangeText={(text) => this.handleInput(text)}
                        />

                <TouchableOpacity onPress={() => this.props.navigation.navigate('AddGroup')}>
                    <Card style={styles.confirmButton}>
                        <Card.Content>
                            <Title style={{textAlign: 'center', color: 'white',}}> Confirm </Title>
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
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 20,
        height: 60,
        position: 'relative',
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
