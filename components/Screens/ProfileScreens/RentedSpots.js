import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {globalStyles} from "../../Styles";

export default class RentedSpots extends Component {

    static navigationOptions = {
        title: 'RentedSpots'
    }

    render() {
        return (
            <View style={globalStyles.content}>
                <Text style={globalStyles.h1}>Lejede parkeringspladser</Text>

            </View>
        );
    };
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#b3b3b3',
        borderBottomWidth: 1,
    },
    textLabel: {
        fontSize: 17,
        marginVertical: 5,
    },
    negative: {
        color: '#A22525',
        fontSize: 17,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    positive: {
        color: '#32a225',
        fontSize: 17,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    balance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginTop: 'auto',
    }
});