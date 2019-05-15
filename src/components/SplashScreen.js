import React, {Component} from 'react';
import { Image, StyleSheet, View} from 'react-native';

export default class SplashScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            timePassed: false,
        };
    }

    componentDidMount() {
        setTimeout( () => {
            this.setTimePassed();
        },1000);
    }
    setTimePassed() {
        this.props.navigation.navigate('SignIn');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logo}>
                    <Image style={styles.logoIcon}
                           source={require('../assets/logo.png')}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'antiquewhite',
    },
    logoIcon: {
        width: 200,
        height: 200,
        justifyContent: 'center'
    },



    logo: {
        marginTop:180,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

});
