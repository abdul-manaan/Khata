import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Card, Paragraph, Title} from 'react-native-paper';
import {Notifications} from './data';
import {updateNTS} from './notificationsscreenflow'
//import {Icon} from "react-native-paper/typings/components/Avatar";

//const groups = [{key: 1, Title: 'Software Engineers', Paragraph: 'Recently eating at KFC!'}, {key: 2, Title: 'Hardware Engineers', Paragraph: 'Recently eating at PDC!'}, {key: 3, Title: 'Electrical Engineers', Paragraph: 'Recently eating at their own home!'}]


export default class NotificationCard extends React.Component {

    caller = (g) => {
        updateNTS(g)
        this.props.navigation.navigate('Approval')
    }

    render() {
        return Notifications.map(g =>
            <Card onPress={() => this.caller(g)} style={styles.cardStyle}>
                <Card.Content>
                    <Title style={{fontSize: 16}}> {g.creator + " created a transaction with you"}</Title>
                    <View style={{flexDirection: 'row'}}>
                        {/*<Avatar.Icon size={24} icon="person-pin"/>*/}
                        {<Text style={{color: 'white'}}>Hell</Text>}
                        <Title style={{fontSize: 12}}>{g.title}</Title>
                    </View>
                </Card.Content>
            </Card>
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
