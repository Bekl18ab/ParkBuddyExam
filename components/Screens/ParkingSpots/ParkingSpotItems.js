import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {globalStyles} from "../../Styles";

export default class ParkingSpotItems extends Component {
    //Metode som gør, at når man trykker på den adresse man vil parkere hos, så kommer den yderligere information
    handlePress = () => {
        const {id, onSelect} = this.props
        onSelect(id)
    };

    render() {
        const {parkingDetails} = this.props;
        return (
            //Laver et view som kan respondere når man trykker på parkeringspladsen og få info
            <View>
            <TouchableOpacity style={globalStyles.label} onPress={this.handlePress}>
                <Text>{parkingDetails.adresse}</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

