import React from "react"
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import StackNavigation from "./StackNavigation";
import Auth from "../Authentication/Auth";
import TopNavigation from "./TopNavigation";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ParkingSpots from "../Screens/ParkingSpots/ParkingSpots";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            initialRoute={ParkingSpots} // Sørg for dette er initial route
            activeColor="#fff"
            shifting={true}
            inactiveColor="#bbb"
            barStyle={{backgroundColor: '#255CA2',}}
        >
            <Tab.Screen
                name="Parkingspots"
                component={TopNavigation}
                options={{
                    tabBarLabel: 'Parkeringer',
                    tabBarColor: '#2568a2',
                    tabBarIcon: ({color}) => (
                        <Icon name="ios-car" color={color} size={24}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: 'Hjem',
                    tabBarColor: '#255ca2',
                    tabBarIcon: ({color}) => (
                        <Icon name="ios-home" color={color} size={24}/>
                    ),
                }}
            />
            <Tab.Screen
                name="Profil"
                component={StackNavigation}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarColor: '#2548a2',
                    tabBarIcon: ({color}) => (
                        <Icon name="ios-person" color={color} size={24}/>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}


const MainNavigation = ({auth}) => {
    return (
        <>
            {/* Ternary expression (simpel syntaks for en if-else. ? betyder 'hvis true'. : betyder 'hvis false') */}
            {auth ? (
                <NavigationContainer>
                    <MyTabs/>
                </NavigationContainer>
            ) : (
                <Auth/>
            )}
        </>
    )
}

export default MainNavigation

