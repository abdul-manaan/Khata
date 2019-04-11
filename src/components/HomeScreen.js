import React from 'react';
import AppBar from "./AppBar";
import GroupCard from "./GroupCard";
import {ScrollView, StyleSheet, View,} from 'react-native';

export default class HomeScreen extends React.Component {
    state = {};

    componentDidMount() {
        this.props.navigation.addListener(
            'didFocus',
            () => {
                this.forceUpdate();
            }
        );
        // BackHandler.addEventListener('hardwareBackPress', () => BackHandler.exitApp());
    }


    // componentWillUnMount() {
    //     BackHandler.removeEventListener('hardwareBackPress', () => BackHandler.exitApp());
    // }

    render() {
        return (
            <View style={styles.main}>
                <AppBar navigation={this.props.navigation} title='Home' subtitle='Your Groups'/>
                <ScrollView>
                    <GroupCard navigation={this.props.navigation}/>
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
