import React from 'react';
import {Image, StyleSheet, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {Card, TextInput, Button} from 'react-native-paper';
import { Text} from "react-native-elements";

export default class GroupName extends React.Component {

    state = {};


    handleInput = (inp) => {
        //this.setState({[inp]});
    };
    resendCode = () => {

    };
    validateCode = () => {
        this.props.navigation.navigate('SignIn');
    };

    render() {
        return (
            <View style={styles.main}>

                <View style={styles.logo}>
                    <Image style={styles.logoIcon}
                           source={require('../assets/logo.png')}/>
                </View>

                <Card style={styles.cardStyle}>
                    <Card.Content>
                        <Text>
                            We have sent you an activation code at your Email address. Please enter the code below to activate your account.
                        </Text>
                        <TextInput style={styles.textBox}
                                   placeholder="Activation Code"
                                   onChangeText={(text) => this.handleInput(text)}
                        />
                    </Card.Content>

                    <Button onPress={()=>this.validateCode()} style={styles.confirmButton}>
                        <Text style={{color:'white'}}>Activate Account</Text>
                    </Button>
                    <Card.Content style={styles.resend}>
                        <Text style={{justifyContent:'center'}}>Didn't get the code? </Text>
                        <TouchableOpacity onPress={() => this.resendCode()}>
                            <Text style={{color:'#aa2200'}}>Resend Code </Text>
                        </TouchableOpacity>
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
    },
    name: {
        fontSize: 15,
        marginTop: 6,
        fontWeight: 'bold',
        color: 'black'
    },
    confirmButton: {
        marginTop:30,
        backgroundColor: '#aa2200',
        marginLeft: 30,
        marginRight: 30,
        height: 45,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardStyle: {
        backgroundColor: 'antiquewhite',
        borderBottomColor: '#aa2200',
        marginTop: 5,
        marginLeft: 8,
        marginRight: 8,
    },
    textBox:{
        marginLeft: 8,
        marginRight: 8,
        marginTop: 30,
    },
    logoIcon: {
        width: 100,
        height: 100,
        justifyContent: 'center'
    },
    logo: {
        marginTop: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 35,
    },
    resend:{
        flex:1,
        flexDirection:'row',
        marginTop: 20,
        alignItems: 'center',
        marginLeft: 50,
    }

});
