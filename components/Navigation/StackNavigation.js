import React,{ Component } from 'react'
// import { Button, View, Text } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Profile from '../Screens/Profile';
import SettingsScreen from '../Screens/SettingsScreen';
import Payments from "../Screens/Payments";
// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator()

//Bruges til at skifte mellem 2 skærme på parkingspots 
export default class StackNavigation extends Component {
    render() {
        console.log("hehej")

        return (  
            <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Stack.Screen name="Setting" component={SettingsScreen} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Payments" component={Payments} />
            </Stack.Navigator>
        );
    }
}
