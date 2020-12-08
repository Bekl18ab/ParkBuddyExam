import React, {Component} from 'react'
import {Button, View, Text} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import AddParkingSpots from './../Screens/ParkingSpots/AddParkingSpot';
import ParkingSpots from './../Screens/ParkingSpots/ParkingSpots';
import ParkingSpotDetails from '../Screens/ParkingSpots/ParkingSpotDetails';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {globalStyles} from '../Styles';
import ParkingNavigation from './ParkingNavigation';

const Tab = createMaterialTopTabNavigator();

export default class MyTabs extends Component {
    render() {
        return (
            <View style={globalStyles.container}>
                <View style={globalStyles.header}>
                    <Text style={globalStyles.headerTitle}>ParkBuddy</Text>
                </View>
                <View>
                    <Tab.Navigator>
                        <Tab.Screen name="Parkeringspladser" component={ParkingNavigation}/>
                        <Tab.Screen name="Tilføj parkeringsplads" component={AddParkingSpots}/>
                    </Tab.Navigator>
                </View>
            </View>
        );
    }
}




