import React from 'react';
import AppBar from "./AppBar";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card, Checkbox, Title} from 'react-native-paper';
import {addGroup, friends} from './data'

export default class AddGroupScreen extends React.Component {

    state = {};

    _check = (f) => {
        this.setState({[f]: !this.state[f]});
        console.log('Pressed\n\n');
    };

    makeGroup = () => {
        let tmp = Object.keys(this.state);
        let members = [];
        for (let i = 0; i < tmp.length; i++) {
            if (this.state[tmp[i]]) {
                members.push(tmp[i])
            }
        }

        let newGroup = {Title: 'Engineers', Paragraph: 'Recently eating at anonymous hotel', Members: members};
        addGroup(newGroup);
        this.props.navigation.goBack()
    };
    render() {
        if (Object.keys(this.state).length < 1) {
            friends.map(f => this.state[f] = false);
        }

        return (
            <View style={styles.main}>
                <AppBar navigation={this.props.navigation} title='New Group' subtitle='Make a new group with friends'/>
                <Card style={styles.cardStyle}>
                    <Card.Content>
                        <Title> Select Friends</Title>
                        <ScrollView>
                            {friends.map(f =>
                                <View style={styles.members}>
                                    <Checkbox
                                        status={this.state[f] === true ? 'checked' : 'unchecked'}
                                        color='#aa2200'
                                        onPress={() => this._check(f)}
                                    />
                                    <Text style={styles.name}> {f}</Text>
                                </View>
                            )}
                        </ScrollView>
                    </Card.Content>
                </Card>


                <TouchableOpacity onPress={() => this.makeGroup()}>
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
    members: {
        borderBottomWidth: 1,
        borderColor: '#d6d7da',
        flexDirection: 'row',

    }
});
