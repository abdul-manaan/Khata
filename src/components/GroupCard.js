import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Avatar, Card, Paragraph, Title} from 'react-native-paper';
import {get_Current_user, get_group,} from './data';
import {updateGTS, fetch_once_GC, fetched_once_GC} from './groupscreensflow'
//import {Icon} from "react-native-paper/typings/components/Avatar";

const groups = [{key: 1, Title: 'Software Engineers', Paragraph: 'Recently eating at KFC!'}, {key: 2, Title: 'Hardware Engineers', Paragraph: 'Recently eating at PDC!'}, {key: 3, Title: 'Electrical Engineers', Paragraph: 'Recently eating at their own home!'}]


export default class GroupCard extends React.Component {

    constructor(props) {
        super(props);
        this.fetchGroup();
        this.state = {groups: []};
    }
    fetchGroup = async () => {
        let local_groups_store = [];
        let user = await get_Current_user();
        let groups = user['groups'];

        await Promise.all(groups.map(async g => local_groups_store.push(await get_group(g))));
        //if(local_groups_store.length < 1){this.gfound = false;}
        this.setState({groups: local_groups_store})

    };

    _handle_press = (g) => {
        updateGTS(g);
        this.props.navigation.navigate('GroupInfo')
    };

    render() {
        this.fetchGroup();

        if (this.state.groups.length > 0) {
            return this.state.groups.map(g =>
                <Card onPress={() => this._handle_press(g)} style={styles.cardStyle}>
                    <Card.Content>
                        <Title> {g['name']}</Title>
                        <View style={{flexDirection: 'row'}}>
                            <Avatar.Icon size={24} icon="person-pin"/>
                            <Text style={{color: 'white'}}>Hell</Text>

                            <Paragraph styles={{paddingLeft: 30, fontSize: 24}}>
                                {'transactions' in g || 'No Transactions'}
                                {!('transactions' in g) || `${g['transactions'].length} Transactions`}
                            </Paragraph>
                        </View>
                    </Card.Content>
                </Card>
            );
        } else {
            return(
                    <View></View>
            );
        }

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
