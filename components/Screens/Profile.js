import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class Profile extends Component {

    static navigationOptions= {
        title:'Profile'
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Profile</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'red',
        borderWidth: 20,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    text: {
        fontSize: 20,
    },
});