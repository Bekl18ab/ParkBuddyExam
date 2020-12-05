import React,{ Component } from 'react'
import { Button, View, Text } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import AddParkingSpots from './../Screens/ParkingSpots/AddParkingSpot';
import ParkingSpots from './../Screens/ParkingSpots/ParkingSpots';
import ParkingSpotDetails from '../Screens/ParkingSpots/ParkingSpotDetails';

const Stack = createStackNavigator()

//Bruges til at skifte mellem 2 skærme på parkingspots 
export default class TopNavigation extends Component {
    render() {
        return (  
            <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<<<<<<< HEAD
                <Stack.Screen name="Parkingspots" component={ParkingSpots} />
                <Stack.Screen name="Add Parkingspots" component={AddParkingSpots} />
                <Stack.Screen name="ParkingDetails" component={ParkingSpotDetails} />
=======
                <Stack.Screen name="Tilføj parkeringsplads" component={ParkingSpots} />
                <Stack.Screen name="Parkeringspladser" component={AddParkingSpots} />
>>>>>>> dec2ce86b24b1265e52260915a390e648bf8aa22
            </Stack.Navigator>
        );
    }
}