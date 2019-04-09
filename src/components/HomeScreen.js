import React from 'react';
import AppBar from "./AppBar";
import GroupCard from "./GroupCard";
import {StyleSheet, View,} from 'react-native';

export default class HomeScreen extends React.Component {
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
                <AppBar navigation={this.props.navigation} title='Home' subtitle='Your Groups'/>
                <GroupCard navigation={this.props.navigation}/>
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
