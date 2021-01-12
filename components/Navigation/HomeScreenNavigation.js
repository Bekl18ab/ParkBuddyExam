import React, {Component} from 'react'
import {View, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {globalStyles} from '../Styles';
import ParkingNavigation from './ParkingNavigation';
import HomeScreen from '../Screens/HomeScreen';
import ParkingSpot from '../Screens/ParkingSpots/ParkingSpots';

const Tab = createStackNavigator();

export default class HomeScreenNavigation extends Component {
    render() {
        return (

            <View style={globalStyles.container}>
                <View>
                </View>
                <Tab.Navigator>
                    <Tab.Screen options={{headerShown: false}} name="Hjem" component={HomeScreen}/>
                    <Tab.Screen name="Parkeringspladser" component={ParkingSpot}/>
                </Tab.Navigator>
            </View>

        );
    }
}




