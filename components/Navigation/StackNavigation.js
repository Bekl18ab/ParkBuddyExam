import React,{ Component } from 'react'
import { Button, View, Text } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Profile from '../Screens/Profile';
import SettingsScreen from '../Screens/SettingsScreen';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator()

//Bruges til at skifte mellem 2 skærme på parkingspots 
export default class StackNavigation extends Component {
    render() {
        return (  
            <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Stack.Screen name="Setting" component={SettingsScreen} />
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        );
    }
}
