import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import AppBar from './AppBar'
import {Icon} from 'react-native-elements'


export default class Profile extends Component {

    render() {
        return (
            <View style={styles.container}>
                <AppBar navigation={this.props.navigation} title="Profile"/>
                <View style={styles.header}></View>
                <Image style={styles.avatar} source={require('../assets/profile.jpg')}/>
                <View style={styles.body}>
                    <View style={styles.bodyContent}>
                        <Text style={styles.name}>John Doe</Text>
                        <Text style={styles.info}>UX Designer / Mobile developer</Text>

                        <View style={styles.emailContainer}>
                            <View style={styles.iconRow}>
                                <Icon
                                    name="email"
                                    underlayColor="transparent"
                                    onPress={() => console.log('a')}
                                />
                            </View>
                            <View style={styles.emailRow}>
                                <View styles={styles.emailColumn}>
                                    <Text style={styles.emailText}>salman@chutiyapa.com</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.emailContainer}>
                            <View style={styles.iconRow}>
                                <Icon
                                    name="call"
                                    underlayColor="transparent"
                                    onPress={() => console.log('a')}
                                />
                            </View>
                            <View style={styles.emailRow}>
                                <View styles={styles.emailColumn}>
                                    <Text style={styles.emailText}>+92-900-78601</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#aa2200",
        height: 200,
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 160
    },

    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 10
    },
    description: {
        fontSize: 16,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center'
    },
    buttonContainer: {
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    emailColumn: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 5,
    },
    iconRow: {
        marginTop:10,
        flex: 2,
        justifyContent: 'center',
    },
    emailRow: {
        flex: 8,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    emailContainer: {
        margin:16,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom:25,
    },
    emailText:{
        fontSize:20,
    }

});

