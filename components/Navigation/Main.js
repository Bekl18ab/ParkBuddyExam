import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import Auth from "../Authentication/Auth";
import Icon from "react-native-vector-icons/FontAwesome5";
import {MaterialIcons} from "react-native-vector-icons";
import TopNavigation from "./TopNavigation";
import ParkingSpots from "../Screens/ParkingSpots/ParkingSpots";
import StackNavigation from "./StackNavigation";

const Tab = createBottomTabNavigator();

const MainTabs = () => (
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
            tabBarIcon: ({color}) =>(
            <Icon name="car" size={30} color={color} />
            )}}
        />
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarLabel: 'Hjem',
            tabBarColor: '#255ca2',
            tabBarIcon: ({color}) =>(
            <Icon name="home" size={30} color={color} />
            )}}
        />
        <Tab.Screen
        name="Profil"
        component={StackNavigation}
        options={{
            tabBarIcon: ({color}) =>(
            <MaterialIcons name="person" size={40} color={color} />
            )}}
        />
    </Tab.Navigator>
)

const MainNavigation = ({auth}) => {
    return (
        <>
        {/* Ternary expression (simpel syntaks for en if-else. ? betyder 'hvis true'. : betyder 'hvis false') */}
        {auth ? (
            <NavigationContainer>
                <MainTabs />
            </NavigationContainer>
        ) : (
            <Auth />
        )}
        </>
    )
}

export default MainNavigation