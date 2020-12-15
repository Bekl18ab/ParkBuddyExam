import React, {Component} from 'react'
import {Button, View, Text} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import ParkingSpots from './../Screens/ParkingSpots/ParkingSpots';
import ParkingSpotDetails from '../Screens/ParkingSpots/ParkingSpotDetails';

const Stack = createStackNavigator()

//Bruges til at skifte mellem 2 skærme på parkingspots
export default class ParkingNavigation extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Parkingspots" component={ParkingSpots} />
                <Stack.Screen name="ParkingDetails" component={ParkingSpotDetails} />
            </Stack.Navigator>
        );
    }
}
