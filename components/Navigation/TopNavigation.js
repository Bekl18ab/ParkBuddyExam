import React,{ Component } from 'react'
import { Button, View, Text } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import AddParkingSpots from './../Screens/ParkingSpots/AddParkingSpot';
import ParkingSpots from './../Screens/ParkingSpots/ParkingSpots';

const Stack = createStackNavigator()

//Bruges til at skifte mellem 2 skærme på parkingspots 
export default class TopNavigation extends Component {
    render() {
        return (  
            <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Stack.Screen name="Tilføj parkeringsplads" component={ParkingSpots} />
                <Stack.Screen name="Parkeringspladser" component={AddParkingSpots} />
            </Stack.Navigator>
        );
    }
}