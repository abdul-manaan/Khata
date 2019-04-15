import React from 'react';
import AppBar from "./AppBar";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card, Checkbox, Paragraph, Title,TextInput} from 'react-native-paper';


export default class GroupName extends React.Component {

    state = {};



   
    render() {

        return (
            <View style={styles.main}>
                <AppBar 
                  navigation={this.props.navigation} 
                  title='Group Name' 
                  subtitle='Enter group name'/>

                        <TextInput style={styles.textBox}
                          placeholder="Enter your Group Name"
                          onChangeText={(text) => this.setState({text})}
                        />

                <TouchableOpacity onPress={() => {}}>
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
        position:'absolute',
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
