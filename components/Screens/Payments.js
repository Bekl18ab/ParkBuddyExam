import React, { Component } from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

export default class Payments extends Component {

    static navigationOptions= {
        title:'Payments'
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Payments</Text>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
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
