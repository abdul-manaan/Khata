import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import QRCode from 'react-native-qrcode';


export default class QR_Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            display: props.display || '',
            bg:props.bg || '#000',
            fg:props.fg || '#fff',
        }
    }

    render() {
        return (
            <View style={styles.MainContainer}>
                <QRCode value={this.state.content} size={250} bgColor={this.state.bg} fgColor={this.state.fg}></QRCode>
                <Text style={{color:this.state.bg}}>{this.state.display}</Text>
            </View>
        );
    }
}


styles = StyleSheet.create({
    MainContainer: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        paddingTop: 40,
    },
    TextStyle: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    }

})