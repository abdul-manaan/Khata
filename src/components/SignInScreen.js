import React, {Component} from 'react';
import {signin} from './data';
import {Alert, Image, StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';

export default class SignInScreen extends Component {

    constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }

    onClickListener = () => {
        if (!signin(this.state.email, this.state.password)) {
            this.props.navigation.navigate('Home');

            return 0;
        } else {
            Alert.alert("Email or password incorrect");
            return 1;
        }
    };

    render() {
        return (
            <View style={styles.container}>


                <View style={styles.logo}>
                    <Image style={styles.inputIcon}
                           source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                           source={{uri: 'https://png.icons8.com/message/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Email"
                               keyboardType="email-address"
                               underlineColorAndroid='transparent'
                               onChangeText={(email) => this.setState({email})}/>
                </View>

                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon}
                           source={{uri: 'https://png.icons8.com/key-2/ultraviolet/50/3498db'}}/>
                    <TextInput style={styles.inputs}
                               placeholder="Password"
                               secureTextEntry={true}
                               underlineColorAndroid='transparent'
                               onChangeText={(password) => this.setState({password})}/>
                </View>

                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]}
                                    onPress={() => this.onClickListener()}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.buttonContainer}
                                    onPress={() => this.onClickListener('restore_password')}>
                    <Text>Forgot your password?</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.textinformation}
                                    onPress={() => this.props.navigation.navigate('SignUp')}>
                    <Text>Don't have an account? Sign up</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
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

    textinformation: {
        flexDirection: 'row',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 10,
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
