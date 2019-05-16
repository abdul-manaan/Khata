import React, {Component} from 'react';
import QRCode from 'react-native-qrcode';
import AppBar from "./AppBar";
import { View,} from 'react-native';

export default class QR_Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            display: props.display || '',
        }
    }

    render() {
        return (
            <View>
                <AppBar navigation={this.props.navigation} title='QR for making friends' subtitle='Ask buddies to scan it'/>
                <QRCode value={this.state.content} size={250}/>
            </View>

        );
    }
}
