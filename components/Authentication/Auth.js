import React from "react"
import {View, Text, StyleSheet} from 'react-native';
import SignUpForm from './SignUp';
import Login from './Login';
import { globalStyles } from '../Styles';

const Auth = () => {
    return (
        <View style={globalStyles.container}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.headerTitle}>ParkBuddy</Text>
            </View>
            <View style={styles.welcome}>
                <Login/>
                <SignUpForm/>
            </View>
        </View>
    )
}

export default Auth

const styles = StyleSheet.create({
    welcome: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        paddingVertical: 30,
        justifyContent: 'space-evenly'
    }
});
