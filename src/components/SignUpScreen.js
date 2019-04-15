import React, {Component} from 'react';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {create_user,} from './data'

export default class SignUpScreen extends Component {

    state = {
        email: '',
        password: '',
        phone: '',
        name: '',
    };

    onClickListener = (viewId) => {
        Alert.alert("Alert", "Button pressed " + viewId);
    };

    render() {
        return (
            <View style={styles.container}>


                <View style={styles.logo}>
                    <Image style={styles.inputIcon}
                           source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                </View>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Full Name"
                               keyboardType="default"
                               underlineColorAndroid='transparent'
                               onChangeText={(name) => this.setState({name})}/>
                </View>


                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Phone No."
                               keyboardType="phone-pad"
                               underlineColorAndroid='transparent'
                               onChangeText={(phone) => this.setState({phone})}/>
                </View>


                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={(email) => this.setState({email})}/>
                </View>

                <View style={styles.inputContainer}>

                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
                                    onPress={() => {
                                        create_user(this.state);
                                        this.props.navigation.navigate('SignIn')
                                    }}>
                    <Text style={styles.loginText}>Enter</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer}
                                    onPress={() => this.onClickListener('restore_password')}>
                    <Text>Sign up with facebook</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'antiquewhite',
    },
    inputContainer: {
        borderBottomColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        borderBottomWidth: 1,
        width: 300,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#FFFFFF',
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },

    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        width: 300,
        borderRadius: 30,
    },

    loginButton: {
        backgroundColor: "#9b0000",
    },
    logo: {
        marginTop: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 50,
    },
    loginText: {
        color: 'white',
    }
});
