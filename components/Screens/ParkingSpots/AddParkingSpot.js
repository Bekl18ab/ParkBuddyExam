import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, ScrollView } from 'react-native';
import firebase from 'firebase';

export default class AddParkingSpots extends Component {

  state = {
    adresse: '',
    pris: '',
    ledighed: '',
  };

  //Gør så det er tekst som man skriver, som bliver tilføjet de tre forskelleige states
  handleAdresseChange = text => this.setState({ adresse: text});

  handlePrisChange = text => this.setState({ pris: text});

  handleLedighedChange = text => this.setState({ ledighed: text});

  //Opretter en metoder, som gør det muligt at gemme den nyoprettede parkeringsplads og få den i firebase
  handleSave = () => {
    const { adresse, pris, ledighed } = this.state;
    try {
      const reference = firebase
      .database()
      .ref('/ParkingSpots/')
      .push({adresse, pris, ledighed});
      Alert.alert('Parkeringsplads gemt!');
      this.setState({adresse: '', pris: '', ledighed: '',});
      this.props.navigation.navigate('FindParking');
    } catch (e) {
      console.log(e);
    }
  };
    render () {
      const { adresse, pris, ledighed } = this.state;
      //I return er der et tekstinput så de 3 forskellige states kan udfyldes og oprettes
      return(
      <ScrollView>
        <View style={styles.row}>
          <Text style={styles.label}>Adresse:</Text>
          <TextInput
            value={adresse}
            onChangeText={this.handleAdresseChange}
            style={styles.input}
            onFocus={() => {
              //
            }}
            onBlur={() => {
              //
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Pris:</Text>
          <TextInput
            value={pris}
            onChangeText={this.handlePrisChange}
            style={styles.input}
            onFocus={() => {
              //
            }}
            onBlur={() => {
              //
            }}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Ledighed:</Text>
          <TextInput
            value={ledighed}
            onChangeText={this.handleLedighedChange}
            style={styles.input}
            onFocus={() => {
              //
            }}
            onBlur={() => {
              //
            }}
          />
        </View>
        <Button title="Tilføj parkeringsplads" onPress={this.handleSave}/>

        </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center' },
  row: {
    flexDirection: 'row',
    height: 30,
    margin: 20,
  },
  label: { fontWeight: 'bold', width: 100 },
  input: { borderWidth: 1, flex: 1 },

});