// 'use strict';
import React, { Component } from 'react';
import {CurrentUser, add_friend, hashify} from "./data";
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
   // Linking,
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import AppBar from "./AppBar";

export default class QRScannerScreen extends Component {
    onSuccess = (e) => {
        // Linking
        //     .openURL(e.data)
        //     .catch(err => console.error('An error occured', err));
        console.log(e.data, ' e.data');
        let me = hashify(CurrentUser['profile']['email']);
        console.log('me: ',me);
        add_friend(me , e.data);
        add_friend(e.data, me);
        this.props.navigation.navigate('FriendsList');
        alert("You made a new friend!")
    };

    render() {
        return (
            <View>
                <AppBar navigation={this.props.navigation} title='QR for making friends' subtitle='Ask buddies to scan it'/>
                <QRCodeScanner
                    onRead={this.onSuccess}
                    topContent={
                        <Text style={styles.centerText}>
                            Scan this and make friends
                        </Text>
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centerText: {
        flex: 1,
        fontSize: 18,
        padding: 32,
        color: '#777',
    },
    textBold: {
        fontWeight: '500',
        color: '#000',
    },
    buttonText: {
        fontSize: 21,
        color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
        padding: 16,
    },
});
