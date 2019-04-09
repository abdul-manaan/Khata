import React from 'react';
import AppBar from "./AppBar";
import GroupCard from "./GroupCard";
import {StyleSheet, View,} from 'react-native';

export default class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.main}>
                <AppBar navigation={this.props.navigation}/>
                <GroupCard navigation={this.props.navigation}/>
            </View>
        );
    }
}
//hgyhgh

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: 'antiquewhite',
    }
});
