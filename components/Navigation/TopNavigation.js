import React, {Component} from 'react'
import {View, Text} from 'react-native';
import AddParkingSpots from './../Screens/ParkingSpots/AddParkingSpot';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {globalStyles} from '../Styles';
import ParkingNavigation from './ParkingNavigation';

const Tab = createMaterialTopTabNavigator();

export default class TopNavigation extends Component {
    render() {
        return (
            
            <View style={globalStyles.container}>
                <View style={globalStyles.header}>
                    <Text style={globalStyles.headerTitle}>ParkBuddy</Text>
                </View>
                
                <Tab.Navigator>
                    <Tab.Screen name="Parkeringspladser" component={ParkingNavigation}/>
                    <Tab.Screen name="Tilføj parkeringsplads" component={AddParkingSpots}/>
                </Tab.Navigator>
            </View>
                
        );
    }
}




