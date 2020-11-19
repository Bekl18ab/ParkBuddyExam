import React,{ Component } from 'react'
import { Button, View, Text } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import ParkingSpots from "./../Screens/ParkingSpots/ParkingSpots";
import AddParkingSpots from "./../Screens/ParkingSpots/AddParkingSpot";


const Stack = createStackNavigator()

// Dette er kun for at se syntaks! Bruges ikke og kan slettes efter! 
export default class TopNavigation extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Parking Spots" component={ParkingSpots} />
                <Stack.Screen name="Tilføj parkeringsplads" component={AddParkingSpots} />
            </Stack.Navigator>
        );
    }
}