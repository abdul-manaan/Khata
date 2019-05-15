import React, {Component} from 'react';
import QR_Code from './QR_Code';
import {Card} from "react-native-paper";
import {StyleSheet, View} from "react-native";
import {CurrentUser} from './data'



export default class QRScreen extends Component {
    render() {
        return (
            <View style={styles.main}>
                <Card style={{backgroundColor: 'white'}}>
                    <Card.Content>
                        <QR_Code display='Scan this for getting into group' content={JSON.stringify(CurrentUser['profile']['email'].hashCode())}/>
                    </Card.Content>
                </Card>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'antiquewhite',
        alignItems: 'center',
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
});
