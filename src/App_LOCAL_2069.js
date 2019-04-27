import React from 'react';
import {createAppContainer, createDrawerNavigator, createStackNavigator} from 'react-navigation';
import HomeScreen from "./components/HomeScreen";
import AddGroupScreen from "./components/AddGroupScreen";
import HbMenu from "./components/hbMenu";
import QRScreen from "./components/QRScreen";
import {Dimensions} from 'react-native';
import SignInScreen from './components/SignInScreen';
import SignUpScreen from './components/SignUpScreen';
import GroupName from './components/GroupName'

const WIDTH = Dimensions.get('window').width;


import Notification from './components/Notification'

const DrawerConfig = {
    initialRouteName: 'MainStack',
    headerMode: 'screen',
    drawerWidth: WIDTH * 0.75,
    contentComponent: ({navigation}) => {
        return (<HbMenu navigation={navigation}/>)
    }
};

export const MainStack = createStackNavigator({
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
    GroupName: {
        screen: GroupName,
        navigationOptions: {
            header: null,
        }
    },
    Notification: {
        screen: Notification,
        navigationOptions: {
            header: null,
        }
    },

}, {headerMode: 'screen'});


export const Drawer = createDrawerNavigator({
    MainStack: {
        screen: MainStack
    }
}, DrawerConfig);


export const MainNavigator = createStackNavigator({
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

    Drawer: {
        screen: Drawer,
        navigationOptions: {
            header: null,
            gesturesEnabled: false
        }
    }
}, {headerMode: 'none'});


const App = createAppContainer(MainNavigator);

export default App;
