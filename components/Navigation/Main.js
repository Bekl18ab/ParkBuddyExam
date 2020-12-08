import React from "react"
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import StackNavigation from "./StackNavigation";
import Auth from "../Authentication/Auth";
import TopNavigation from "./TopNavigation";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialBottomTabNavigator();

const MainTabs = () => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        labelStyle: {fontSize: 22, padding: 6},
        style: {height: 80}   
      }}>
        <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarIcon: ({color}) =>(
            <Icon name="home" size={30} color={color} />
            )}}
        />
        <Tab.Screen
        name="Parkingspots"
        component={TopNavigation}
        options={{
            tabBarIcon: ({color}) =>(
            <Icon name="user-friends" size={30} color={color} />
            )}}
        />
        <Tab.Screen
        name="Settings"
        component={StackNavigation}
        options={{
            tabBarIcon: ({color}) =>(
            <MaterialIcons name="settings" size={30} color={color} />
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
                    <MyTabs/>
                </NavigationContainer>
            ) : (
                <Auth/>
            )}
        </>
    )
}

export default MainNavigation
