import React,{ Component } from 'react'
import { Button, View, Text } from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import CbsScreen from './../SubComponent/CbsScreen';
import DetailsScreen from './../SubComponent/Details';

const Stack = createStackNavigator()

// Dette er kun for at se syntaks! Bruges ikke og kan slettes efter! 
export default class TopNavigation extends Component {
    render() {
        return (
            <Stack.Navigator>
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="CBS" component={CbsScreen} />
            </Stack.Navigator>
        );
    }
}