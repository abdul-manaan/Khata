import React from 'react';
import AppBar from "./AppBar";
import {ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card, Checkbox, Title} from 'react-native-paper';
import {addGroup, create_group, encryptEmail, get_friends, get_Current_user, recent_group_name, updateQR} from './data'
import {Icon} from "react-native-elements";


export default class friendListScreen extends React.Component {

    state = {
        friends : {},
    };


    fetch_friends = async () => {
        let fr = await get_friends();
        this.setState({friends: fr});
    };

    render() {
        this.fetch_friends();

        if(Object.keys(this.state.friends).length > 0){

            return (
                <View style={styles.main}>
                    <AppBar navigation={this.props.navigation} title='Friends' subtitle='Yo Buddies!'/>
                    <Card style={styles.cardStyle}>
                        <Card.Content>
                            <ScrollView>
                                {Object.keys(this.state.friends).map(f =>
                                    <View style={styles.members}>
                                        <Icon name='face' color='#aa2200' size={25}/>
                                        <Text style={{color: 'white'}}>He</Text>
                                        <Text style={styles.name}> {this.state.friends[f]['profile']['name']}</Text>
                                    </View>
                                )}
                            </ScrollView>
                        </Card.Content>
                    </Card>


                </View>
            );
        }
        else{
            return(
                <View style={styles.main}>
                    <AppBar navigation={this.props.navigation} title='Friends' subtitle='Yo Buddies!'/>
                    <Card style={styles.cardStyle}>
                        <Card.Content>
                            <Title> Fetching your friends</Title>
                        </Card.Content>
                    </Card>

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
        color: 'black',
        marginBottom: 8,
    },
    confirmButton: {
        bottom: 0,
        backgroundColor: '#aa2200',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 10,
        height: 45,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrButton: {
        backgroundColor: 'green',
        bottom: 0,
        //backgroundColor: '#aa2200',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 10,
        height: 45,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
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
