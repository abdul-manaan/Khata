import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Card, Title} from 'react-native-paper';
import {get_user,} from './data';
import {groupToShow} from "./groupscreensflow";
import AppBar from "./AppBar";
//import {Icon} from "react-native-paper/typings/components/Avatar";

//const groups = [{key: 1, Title: 'Software Engineers', Paragraph: 'Recently eating at KFC!'}, {key: 2, Title: 'Hardware Engineers', Paragraph: 'Recently eating at PDC!'}, {key: 3, Title: 'Electrical Engineers', Paragraph: 'Recently eating at their own home!'}]


export default class GroupCard extends React.Component {

    state = {members: []};

    _fetchUsers = async () => {
        let local_users = [];
        let memIds = groupToShow['members'];
        await Promise.all(memIds.map(async g => local_users.push(await get_user(g))));
        console.log('\n\n\nDone\n\n\n', local_users);
        this.setState({members: local_users});
    };

    render() {
        this._fetchUsers();
        return (
            <View>
                <AppBar navigation={this.props.navigation} title={groupToShow['name']}
                        subtitle='Members & Transactions'/>
                <Card onPress={() => console.log('pressed')} style={styles.cardStyle}>
                    <Card.Content>
                        {
                            this.state.members.map(mem =>
                                <View style={styles.members}>
                                    <Title> {mem['profile']['name']}</Title>
                                    {/*<Text style={styles.name}> {mem['profile']['name']}</Text>*/}
                                </View>
                            )
                        }
                    </Card.Content>
                </Card>
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
    name: {
        fontSize: 15,
        marginTop: 6,
        fontWeight: 'bold',
        color: 'black'
    },
    members: {
        borderBottomWidth: 1,
        borderColor: '#d6d7da',
        flexDirection: 'row',

    },

});
