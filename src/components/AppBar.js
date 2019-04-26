import React from 'react';
import {Appbar} from 'react-native-paper';
import {StyleSheet} from 'react-native';

export default class AppBar extends React.Component {

    render() {
        return (
            <Appbar.Header style={styles.bar}>
                <Appbar.Action icon="menu" onPress={() => this.props.navigation.toggleDrawer()}/>
                <Appbar.Content
                    title={this.props.title}
                    subtitle={this.props.subtitle}
                />
                {this.props.title !== 'Home' ||
                <Appbar.Action icon="add" onPress={() => this.props.navigation.navigate('GroupName')}/>}

            </Appbar.Header>
        );
    }
}


const styles = StyleSheet.create({
    bar: {
        // position: 'absolute',
        // left: 0,
        // right: 0,
        // top: -10,
        backgroundColor: '#aa2200',
        //alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: "bold",
    },
});
