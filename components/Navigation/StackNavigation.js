import React,{ Component } from 'react'
// import { Button, View, Text } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Profile from '../Screens/ProfileScreens/Profile';
import SettingsScreen from '../Screens/ProfileScreens/SettingsScreen';
import Payments from "../Screens/ProfileScreens/Payments";
import RentedSpots from "../Screens/ProfileScreens/RentedSpots";
import {globalStyles} from "../Styles";
import {Image, View} from "react-native";

// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator()

//Bruges til at skifte mellem 2 skærme på parkingspots
export default class StackNavigation extends Component {
    render() {
        return (
            <View style={globalStyles.container}>
                <View style={globalStyles.header}>
                    <Image style={globalStyles.logo} source={require('../../assets/ParkBuddy.png')}/>
                </View>
                <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Stack.Screen name="Settings" component={SettingsScreen} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Payments" component={Payments} />
                    <Stack.Screen name="RentedSpots" component={RentedSpots} />
                </Stack.Navigator>
            </View>
        );
    }
}