import React from 'react';
import {createAppContainer, createDrawerNavigator} from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import AddGroupScreen from "./components/AddGroupScreen";
import HbMenu from "./components/hbMenu";
import QRScreen from "./components/QRScreen";
import {Dimensions} from 'react-native';
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';

const WIDTH = Dimensions.get('window').width;


const DrawerConfig = {
    initialRouteName: 'SignIn',
    headerMode: 'screen',
    drawerWidth: WIDTH * 0.75,
    contentComponent: ({navigation}) => {
        return (<HbMenu navigation={navigation}/>)
    }
};


const MainNavigator = createDrawerNavigator(
    {
        SignIn: {
            screen: SignInScreen,
            navigationOptions: {
                header: null,
            }
        },
        SignUp: {
            screen: SignUpScreen,
            navigationOptions: {
                header: null,
            }
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                header: null,
            }
        },

        AddGroup: {
            screen: AddGroupScreen,
            navigationOptions: {
                header: null,
            }
        },

        QR: {
            screen: QRScreen,
            navigationOptions: {
                header: null,
            }
        },


    },
    DrawerConfig);

const App = createAppContainer(MainNavigator);

export default App;
