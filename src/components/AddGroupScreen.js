import React from 'react';
import AppBar from "./AppBar";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card, Checkbox, Title} from 'react-native-paper';
import {addGroup, create_group, encryptEmail, get_friends, get_Current_user, recent_group_name, updateQR} from './data'


export default class AddGroupScreen extends React.Component {

    state = {
        friends : {},
    };


    _check = (f) => {
        this.setState({[f]: !this.state[f]});
        // console.log('Pressed\n\n');
    };

    makeGroup = async () => {

        let tmp = Object.keys(this.state);

        let temp_email = await get_Current_user();
        temp_email = temp_email['profile']['email'];
        let members = [`${encryptEmail(temp_email)}`];
        // console.log('Previous Member', members);
        for (let i = 0; i < tmp.length; i++) {
            if (this.state[tmp[i]] && tmp[i] !== 'friends') {
                members.push(tmp[i])
            }
        }

        let newGroup = {Title: recent_group_name, Paragraph: 'Recently eating at anonymous hotel', Members: members};
        addGroup(newGroup);
        let newG = {name: recent_group_name, members: members};
        create_group(newG);
        this.props.navigation.navigate('Home')
    };


    fetch_friends = async () => {
        let fr = await get_friends();
        this.setState({friends: fr});
    };

    render() {
        this.fetch_friends();

        if(Object.keys(this.state.friends).length > 0){
            if (Object.keys(this.state).length < 2) {
                Object.keys(this.state.friends).map(f => this.state[f] = false);
            }
            return (
                <View style={styles.main}>
                    <AppBar navigation={this.props.navigation} title='New Group' subtitle='Make a new group with friends'/>
                    <Card style={styles.cardStyle}>
                        <Card.Content>
                            <Title> Select Friends</Title>
                            <ScrollView>
                                {Object.keys(this.state.friends).map(f =>
                                    <View style={styles.members}>
                                        <Checkbox
                                            status={this.state[f] === true ? 'checked' : 'unchecked'}
                                            color='#aa2200'
                                            onPress={() => this._check(f)}
                                        />
                                        <Text style={styles.name}> {this.state.friends[f]['profile']['name']}</Text>

                                    </View>
                                )}
                            </ScrollView>
                        </Card.Content>
                    </Card>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('QR')}>
                        <Card style={styles.qrButton}>
                            <Card.Content>
                                <Title style={{textAlign: 'center', color: 'white',}}> Generate QR </Title>
                                {updateQR('BC(Kasuri) Sucks')}
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>


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
        else{
            return(
                <View style={styles.main}>
                    <AppBar navigation={this.props.navigation} title='New Group' subtitle='Make a new group with friends'/>
                    <Card style={styles.cardStyle}>
                        <Card.Content>
                            <Title> Fetching your friends</Title>
                        </Card.Content>
                    </Card>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('QR')}>
                        <Card style={styles.qrButton}>
                            <Card.Content>
                                <Title style={{textAlign: 'center', color: 'white',}}> Generate QR </Title>
                                {updateQR('BC(Kasuri) Sucks')}
                            </Card.Content>
                        </Card>
                    </TouchableOpacity>


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
    qrButton: {
        backgroundColor: 'green',
        marginLeft: 8,
        marginRight: 8,
        marginTop: 20,
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
