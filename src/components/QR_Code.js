import React, {Component} from 'react';
import QRCode from 'react-native-qrcode';


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
            <QRCode value={this.state.content} size={250}/>
        );
    }
}
