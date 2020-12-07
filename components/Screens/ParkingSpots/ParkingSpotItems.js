import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class ParkingSpotItems extends Component {
    //Metode som gør, at når man trykker på den adresse man vil parkere hos, så kommer den yderligere information
    handlePress = () => {
        const {id, onSelect} = this.props
        onSelect(id)
    };
    render () {
        const { parkingDetails } = this.props;
        return (
            //Laver et view som kan respondere når man trykker på parkeringspladsen og få info
            <TouchableOpacity style={styles.container} onPress={this.handlePress}>
                <Text style={styles.label}>
                    {parkingDetails.adresse} 
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 1,
      margin: 5,
      padding: 40,
      height: 50,
      justifyContent:'center',
      backgroundColor: '#E2E9EA'
    },
    label: { 
        fontWeight: 'bold',
        fontSize: 10
        
     },
  });