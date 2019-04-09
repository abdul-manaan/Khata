import React from 'react';
import AppBar from "./AppBar";
import {StyleSheet, Text, View} from 'react-native';
import {Card, Title} from 'react-native-paper';


export default class HomeScreen extends React.Component {

    members = {};
    render() {
        return (
            <View style={styles.main}>
                <AppBar navigation={this.props.navigation} title='New Group' subtitle='Make a new group with friends'/>
                <Card style={styles.cardStyle}>
                    <Card.Content>
                        <Title> Select Friends</Title>
                        <View>
                            <Text>12</Text>
                        </View>
                    </Card.Content>
                </Card>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'antiquewhite',
    },
    heading: {
        fontSize: 10,
    },
    cardStyle: {
        backgroundColor: 'white',
        borderBottomColor: 'blue',
        marginTop: 3,
        marginLeft: 8,
        marginRight: 8,
    },
});
