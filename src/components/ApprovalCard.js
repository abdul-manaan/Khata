import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import {Card, Text} from 'react-native-paper'
import {replyNotification,CurrentUser} from "./data"
import {notificationToShow} from './notificationsscreenflow'


export default class ApprovalCard extends React.Component {
    state = {amount: 0,to:'',from:''};


    onClickListener = (data) => {
        replyNotification(CurrentUser['profile']['email'].hashCode(),notificationToShow['creatorID'],notificationToShow['title'].hashCode(),data);
        this.props.navigation.navigate('Home');
    }

    handleInput = (text) => {
        this.setState({amount: text})
    };
    render() {
        return (
            <View>
                <Card style={styles.cardStyle}>
                    <Card.Content>
                        <View>
                            <Text>
                                From:{"\n"}{"   "}
                                <Text style = {{fontWeight: 'bold'}}>
                                    {notificationToShow["transaction"]["from"]}
                                </Text>
                            </Text>

                       <Text>
                           {"\n"} To:{"\n"}{"   "}
                           <Text style = {{fontWeight: 'bold'}}>
                               {notificationToShow["transaction"]["to"]}
                           </Text>

                       </Text>

                            <Text>
                                {"\n"} Amount:{"\n"}{"   "}
                                <Text style = {{fontWeight: 'bold'}}>
                                    {notificationToShow["transaction"]["amount"]}
                                </Text>

                            </Text>


                        </View>
                    </Card.Content>
                </Card>

                <View style = {{alignItems: 'center'}}>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton] }
                                    onPress={() => this.onClickListener(1)}>
                    <Text style={{color : "white"}}>Approve</Text>
                </TouchableHighlight>

                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton1]}
                                        onPress={() => this.onClickListener(2)}>
                        <Text style={{color : "white"}}>Reject</Text>
                    </TouchableHighlight>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    textBox:{
        marginLeft: 8,
        marginRight: 8,
        marginTop: 40,
    },
    cardStyle:{
        marginLeft: 8,
        marginRight: 8,
        marginTop: 5,
    },
    sideLink: {
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
    },
    buttonContainer: {
        alignItems: 'center',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        width: 300,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "green",
    },
    loginButton1: {
        backgroundColor:"#9b0000",
    },
});

// style = {styles.sideLink}
