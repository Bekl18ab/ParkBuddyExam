<<<<<<< HEAD
import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert, TextInput, Button, ScrollView, Linking, FlatList } from 'react-native';
import firebase from 'firebase';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';


export default class AddParkingSpots extends Component {

  state = {
    adresse: '',
    pris: '',
    ledighed: '',
    hasCameraRollPermission: null,
    galleryImages: null,
    showGallery: false
  };

  componentDidMount() {
    this.updateCameraRollPermission();
  }

      //Opretter en metode for at få adgang til galleri
      updateCameraRollPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraRollPermission: status === 'granted'});
    };

    //Henter billeder i galleriet 
    handleLoadGalleryImages = async () => {
        try {
            const result = await MediaLibrary.getAssetAsync({first:20});
            this.setState({ galleryImages: result.assets });
        } catch (e) {
            console.log(e)
        }
    };

    handleSettingLink = () =>{
      Linking.openSettings()
    }

    renderGalleryView() {
      //Viser ingenting så længe vi venter på input fra bruger
      const { hasCameraRollPermission, galleryImages } = this.setState;
      if (hasCameraRollPermission === null) {
        return <View/>;
      }
      //Viser en fejlbesked og en knap til settings hvis brugeren ikke har accepteretet adgang
      if (hasCameraRollPermission === false) {
        return (
          <View>
            <Text> Ingen adgang til kamerarullen</Text>
            <Button title="Gå til indstillinger" onPress={this.handleSettingLink}/>
          </View>
        );
      }
      //Vi looper igennem den liste af billeder som er modtaget fra CameraRoll
      return (
        <View>
          <Button title="Load billeder" onPress={this.handleLoadGalleryImages}/>
          <View>
            {galleryImages && (
              <FlatList
              horizontal
              styles={styles.Flatlist_render}
              data={galleryImages}
              renderItem={({item}) => (
                <Image
                source={{ uri: item.uri}}
                key={item.uri}
                styles={styles.FlatList_image}
              
                  />
              )}
              keyExtractor={item => item.id}
              />
            )}
          </View>
        </View>
      )
    }

  //Gør så det er tekst som man skriver, som bliver tilføjet de tre forskelleige states
  handleAdresseChange = text => this.setState({ adresse: text});
=======
import React, {Component} from 'react';
import {StyleSheet, Text, View, Alert, TextInput, ScrollView} from 'react-native';
import firebase from 'firebase';
import {globalStyles} from "../../Styles";
import {TouchableOpacity} from "react-native-web";

export default class AddParkingSpots extends Component {

    state = {
        adresse: '',
        pris: '',
        ledighed: '',
    };

    //Gør så det er tekst som man skriver, som bliver tilføjet de tre forskelleige states
    handleAdresseChange = text => this.setState({adresse: text});
>>>>>>> cc5de6bc2f2780eba484e9b3936f74dfcd7fb2e0

    handlePrisChange = text => this.setState({pris: text});

    handleLedighedChange = text => this.setState({ledighed: text});

    //Opretter en metoder, som gør det muligt at gemme den nyoprettede parkeringsplads og få den i firebase
    handleSave = () => {
        const {adresse, pris, ledighed} = this.state;
        try {
            const reference = firebase
                .database()
                .ref('/ParkingSpots/')
                .push({adresse, pris, ledighed});
            Alert.alert('Parkeringsplads gemt!');
            this.setState({adresse: '', pris: '', ledighed: '',});
            this.props.navigation.navigate('ParkingSpots')
        } catch (e) {
            console.log(e);
        }
    };

    render() {
        const {adresse, pris, ledighed} = this.state;
        //I return er der et tekstinput så de 3 forskellige states kan udfyldes og oprettes
        return (
            <View style={globalStyles.content}>
                <ScrollView>
                    <View style={styles.row}>
                        <Text style={styles.textLabel}>Adresse:</Text>
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
                        <Text style={styles.textLabel}>Pris:</Text>
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
                        <Text style={styles.textLabel}>Ledighed:</Text>
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
                    <TouchableOpacity style={globalStyles.button} onPress={this.handleSave}>
                        <Text style={globalStyles.buttonText}>Tilføj parkeringsplads</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
<<<<<<< HEAD
  container: { flex: 1, justifyContent: 'center' },
  row: {
    flexDirection: 'row',
    height: 30,
    margin: 20,
  },
  label: { fontWeight: 'bold', width: 100 },
  input: { borderWidth: 1, flex: 1 },
  btn:{
    margin:100
  },
  Flatlist_render:{
    width:'100%'
  },

  lastPhotoContainer: {
    backgroundColor: '#DFF',
    width: '100%',
    height: 130,
    margin: 0
  },

  FlatList_image:{
    width: 200,
    height: 200,
    margin: 5
  },
  galleryView: {
    height: 150,
    width: '100%',
    flexDirection: 'row',
  },

});
=======
    container: {flex: 1, justifyContent: 'center'},
    row: {
        flexDirection: 'row',
        height: 30,
        marginVertical: 10,
    },
    textLabel: {
        fontWeight: 'bold',
        width: 100,
        marginTop: 5,
    },
    input: {
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
});
>>>>>>> cc5de6bc2f2780eba484e9b3936f74dfcd7fb2e0
