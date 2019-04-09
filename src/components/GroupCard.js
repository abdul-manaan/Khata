import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Card, Paragraph, Title} from 'react-native-paper';
import {groups} from './data';
//import {Icon} from "react-native-paper/typings/components/Avatar";

//const groups = [{key: 1, Title: 'Software Engineers', Paragraph: 'Recently eating at KFC!'}, {key: 2, Title: 'Hardware Engineers', Paragraph: 'Recently eating at PDC!'}, {key: 3, Title: 'Electrical Engineers', Paragraph: 'Recently eating at their own home!'}]


export default class GroupCard extends React.Component {
    render() {
        return Object.keys(groups).map(g =>
            <Card onPress={() => console.log('Card Pressed')} style={styles.cardStyle}>
                <Card.Content>
                    <Title> {groups[g].Title}</Title>
                    <View style={{flexDirection: 'row'}}>
                        <Avatar.Icon size={24} icon="person-pin"/>
                        <Text style={{color: 'white'}}>Hell</Text>
                        <Paragraph styles={{paddingLeft: 30, fontSize: 24}}>{groups[g].Paragraph}</Paragraph>
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
