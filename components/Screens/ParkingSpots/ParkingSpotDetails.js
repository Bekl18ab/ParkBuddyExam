import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import firebase from 'firebase';
import {globalStyles} from "../../Styles";


export default class ParkingSpotDetails extends Component {

    componentDidMount() {
        const id = this.props.route.params.id;
        this.loadParkingSpot(id);
    }

    //Opretter en state som er den overodnet parkering
    state = {
        parkingDetails: null,
    }

    //Opretter en metode som loader parkeringspladsen ved dens id i databasen
    loadParkingSpot = id => {
        firebase
            .database()
            .ref('/ParkingSpots/' + id)
            .on('value', parkingSpot => {
                this.setState({parkingDetails: parkingSpot.val()});
            });
    };

    handleRentedSpot = () => {

    };

    render() {
        console.log(this.state)
        const {parkingDetails} = this.state;
        //Hvis parkering ikke er tilgængelig så returnerer den med en tekst
        if (!parkingDetails) {
            return <Text> Ingen tilgængelig data</Text>;
        }
        //Returnerer views som viser tekst med det data som er knyttet til parkeringsplads
        return (
            <ScrollView style={globalStyles.container}>
                <View style={styles.row}>
                    <Text style={styles.label}> Adresse: </Text>
                    <Text style={styles.value}> {parkingDetails.adresse} </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}> Pris: </Text>
                    <Text style={styles.value}> {parkingDetails.pris} </Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}> Ledighed: </Text>
                    <Text style={styles.value}> {parkingDetails.ledighed} </Text>
                </View>
                <TouchableOpacity style={globalStyles.button}>
                        <Text style={globalStyles.buttonText}>Lej parkeringsplads</Text>
                    </TouchableOpacity>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    row: {
        margin: 15,
        flexDirection: 'row',
    },
    label: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    value: {

        fontSize: 20,

    },
});
