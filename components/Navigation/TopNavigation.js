import React,{ Component } from 'react'
import { Button, View, Text } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import AddParkingSpots from './../Screens/ParkingSpots/AddParkingSpot';
import ParkingSpots from './../Screens/ParkingSpots/ParkingSpots';
import ParkingSpotDetails from '../Screens/ParkingSpots/ParkingSpotDetails';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export default class MyTabs extends Component {
    render() {
        return (
            <Tab.Navigator>
              <Tab.Screen name="Parkeringspladser" component={ParkingSpots} />
              <Tab.Screen name="Tilføj parkeringsplads" component={AddParkingSpots} />
            </Tab.Navigator>
          );
        } 
    }

const Stack = createStackNavigator()

//Bruges til at skifte mellem 2 skærme på parkingspots 
/*export default class TopNavigation extends Component {
    render() {
        return (  
            <Stack.Navigator style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Stack.Screen name="Parkingspots" component={ParkingSpots} />
                <Stack.Screen name="Add Parkingspots" component={AddParkingSpots} />
                <Stack.Screen name="ParkingDetails" component={ParkingSpotDetails} />
                <Stack.Screen name="Tilføj parkeringsplads" component={ParkingSpots} />
                <Stack.Screen name="Parkeringspladser" component={AddParkingSpots} />
            </Stack.Navigator>
        );
    }
}
*/

