import * as React from 'react';
import {Text, View, StyleSheet, Button, SafeAreaView, TouchableOpacity, Image} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Accuracy} from "expo-location";
import {TextInput} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {globalStyles} from '../Styles';
import firebase from 'firebase';

// Denne er kun midlertidig indtil vi får lavet en Google Maps!
export default class HomeScreen extends React.Component {
    mapViewRef = React.createRef();

    constructor(props) {
        super(props);
    
        this.handleParkingSpotSelect = this.handleParkingSpotSelect.bind(this);
    }

    state = {
        //Undersøger om der er tilladelse til lokation
        hasLocationPermission: null,
        //Ser på brugerens nuværende lokaltion
        currentLocation: {
            latitude: 55.5978,
            longitude: 12.35129,
            latitudeDelta: 2,
            longitudeDelta: 2,
            accuracy: "",
        },
        //Ser på de fastsatte markers fra brugeren
        userMarkerCoordinates: [],
        //
        parkingSpotMarkers: {}, 
        //Ser på koordinaten af den valgte markør
        selectedCoordinate: null,
        //Finder adressen på den valgte markør
        selectedAddress: null,
    };

    getLocationPermission = async () => {
        const {status} = await Permissions.askAsync(Permissions.LOCATION);
        this.setState({hasLocationPermission: status});
    };

    componentDidMount = async () => {
        await this.getLocationPermission();
        //firebase parkingSpot Markers
        firebase
            .database()
            .ref('/ParkingSpots')
            .on('value', snapshot => {
                this.setState({parkingSpotMarkers: snapshot.val()})
            });
    };

    updateLocation = async () => {
        const {currentLocation} = this.state;
        const {coords} = await Location.getCurrentPositionAsync({accuracy: Accuracy.Balanced});
        this.setState({currentLocation: coords});

        this.setState({
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 2,
            longitudeDelta: 2,
        })
    };

    adjustZoom = async () => {
        const {currentLocation} = this.state;
        const {coords} = await Location.getCurrentPositionAsync({accuracy: Accuracy.Balanced});
        this.setState({currentLocation: coords});

        this.setState({
            currentLocation: {
                latitude: currentLocation.latitude,
                longitude: currentLocation.longitude,
                latitudeDelta: 0.09,
                longitudeDelta: 0.035,
                accuracy: ""
            }
        })
    };

// Event handler når der laves et long press. Sker når vi sætter en ny markør med et koordinatsæt, der skal tilføjes de
    handleLongPress = event => {
        const {coordinate} = event.nativeEvent;
        this.setState(prevState => {
            return {
                userMarkerCoordinates: [...prevState.userMarkerCoordinates, coordinate],
            };
        });
    };

    handleSelectMarker = coordinate => {
        this.setState({selectedCoordinate: coordinate});
        this.findAddress(coordinate);
    };

    findAddress = async coordinate => {
        const [selectedAddress] = await Location.reverseGeocodeAsync(coordinate);
        this.setState({selectedAddress});
    };

    handleParkingSpotSelect (parkingSpotId) {
        this.props.navigation.navigate( 'ParkingDetails', {id: parkingSpotId});
    }

    closeInfoBox = () =>
        this.setState({selectedCoordinate: null, selectedAddress: null});

    renderCurrentLocation = () => {
        const {hasLocationPermission, currentLocation} = this.state;
        if (hasLocationPermission === null) {
            return null;
        }
        if (hasLocationPermission === false) {
            return <Text>No location access. Go to settings to change</Text>;
        }
        return (
            <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                <TouchableOpacity style={styles.button} onPress={this.updateLocation}>
                    <MaterialCommunityIcons name={"map-marker-radius"} size={18} color={"white"}/>
                    <Text style={globalStyles.buttonText}>Min lokation</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={this.adjustZoom}>
                    <MaterialCommunityIcons name={"magnify"} size={18} color={"white"}/>
                    <Text style={globalStyles.buttonText}>Justér zoom</Text>
                </TouchableOpacity>
                {currentLocation && (
                    // To print the lat and long
                    <Text>
                        {/*{`${currentLocation.latitude}, ${*/}
                        {/*    currentLocation.longitude*/}
                        {/*} ${currentLocation.accuracy}`}*/}
                    </Text>
                )}
            </View>
        );
    };

    render() {
        const {
            userMarkerCoordinates, selectedCoordinate, selectedAddress, currentLocation, parkingSpotMarkers
        } = this.state;

        return (
            <View style={globalStyles.container}>
                <View style={globalStyles.header}>
                    <Image style={globalStyles.logo} source={require('../../assets/ParkBuddy.png')}/>
                </View>
                <SafeAreaView style={globalStyles.content}>
                    <TextInput
                        placeholder={"Find by postal code"}>
                    </TextInput>
                    {this.renderCurrentLocation()}
                    <MapView
                        provider="google"
                        style={styles.map}
                        ref={this.mapViewRef}
                        showsUserLocation
                        onLongPress={this.handleLongPress}
                        mapType="hybrid"
                        region={{
                            latitude: currentLocation.latitude,
                            longitude: currentLocation.longitude,
                            latitudeDelta: currentLocation.latitudeDelta,
                            longitudeDelta: currentLocation.longitudeDelta
                        }}>

                        {Object.keys(parkingSpotMarkers).map(marker => 
                        <Marker
                        key={parkingSpotMarkers[marker].adresse}
                        coordinate={{latitude: parseFloat(parkingSpotMarkers[marker].lat, 10), longitude: parseFloat(parkingSpotMarkers[marker].long, 10)}}
                        title={parkingSpotMarkers[marker].adresse}
                        description="Du kan holde i min indkørsel"
                        onPress={() => this.handleParkingSpotSelect(marker)}
                    >
                        <MaterialCommunityIcons name={"map-marker-radius"} size={26} color={"lightgreen"}/>
                    </Marker>
                         )}
                         {userMarkerCoordinates.map((coordinate, index) => (
                            <Marker
                                coordinate={coordinate}
                                key={index.toString()}
                                onPress={() => this.handleSelectMarker(coordinate)}
                            />
                        ))}
                    </MapView>
                    {selectedCoordinate && (
                        <View style={styles.infoBox}>
                            <Text style={styles.infoText}>
                                {"lat:"} {selectedCoordinate.latitude}, {"long:"} {selectedCoordinate.longitude}
                            </Text>
                            {selectedAddress && (
                                <Text style={styles.infoText}>
                                    {"Postnummer:"} {selectedAddress.postalCode}
                                </Text>
                            )}
                            <Button title="close" onPress={this.closeInfoBox}/>
                        </View>
                    )}
                </SafeAreaView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FF7D2C',
        marginVertical: 20,
        marginHorizontal: 10,
        padding: 10,
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    map: {flex: 1},
    infoBox: {
        height: 100,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FF7D2C',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    infoText: {
        fontSize: 14,
    },
});

