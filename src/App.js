import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from "./components/HomeScreen"
import AddGroupScreen from "./components/AddGroupScreen"
import hbMenu from "./components/hbMenu";
import newScreen from "./components/newScreen";


const MainNavigator = createStackNavigator(
    {
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

        hbMenu: {
            screen: hbMenu,
            navigationOptions: {
                header: null,
            }
        },

        newScreen: {
            screen: newScreen,
            navigationOptions: {
                header: null,
            }
        }

    },
    {
        initialRouteName: 'Home',
        headerMode: 'screen'
    });

const App = createAppContainer(MainNavigator);

export default App;
