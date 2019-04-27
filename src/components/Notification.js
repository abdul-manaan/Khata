import React from 'react';
import AppBar from "./AppBar";
import NotificationCard from "./NotificationCard";
import {ScrollView, StyleSheet, View,} from 'react-native';

export default class Notification extends React.Component {
    state = {};

    componentDidMount() {
        this.props.navigation.addListener(
            'didFocus',
            () => {
                this.forceUpdate();
            }
        );
    }



    render() {
        return (
            <View style={styles.main}>
                <AppBar navigation={this.props.navigation} title='Notifications' subtitle='Your Notifications'/>
                <ScrollView>
                    <NotificationCard navigation={this.props.navigation}/>
                </ScrollView>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'antiquewhite',
    }
});
