import {StyleSheet, Text} from 'react-native';
import Constants from 'expo-constants';
import React from "react";

/* Eksempel på implementering af header
import {globalStyles} from "../../Styles";

<View style={globalStyles.container}>
    <View style={globalStyles.header}>
        <Text style={globalStyles.headerTitle}>ParkBuddy</Text>
    </View>
    <View style={globalStyles.content}>
        //Content goes here
    </View>
</View>
*/

//Updated global styling
export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        paddingVertical: 50,
        alignItems: 'center',
        backgroundColor: '#255CA2',
    },
    headerTitle: {
        color: '#fff',
        // fontFamily: "SignPainter",
        fontSize: 30,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: '#FF7D2C',
        marginHorizontal: 5,
        marginVertical: 20,
        padding: 30,
        alignItems: 'center',
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        textTransform: "uppercase"
    },
    content: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 15,
        paddingVertical: 30,
    },
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        marginVertical: 10,
        padding: 10,
    },
    label:{
        shadowColor: "#000000",
        shadowOpacity: 0.5,
        shadowRadius: 2,
        backgroundColor: '#fff',
        marginHorizontal: 2,
        marginVertical: 7,
        padding: 10,
    },
    Text: {
        fontFamily: "poppins",
        fontSize: 15,
    },
    h1: {fontSize: 30, fontWeight: "bold"},
    h2: {fontSize: 26, fontWeight: "bold"},
    h3: {fontSize: 22, fontWeight: "bold"},
    h4: {fontSize: 18, fontWeight: "bold"},
})

//Initial global styling
export const globaleStyles = StyleSheet.create({
    styleHome: {
        fontSize: 50,
        fontWeight: "bold",
    },
    homeView: {
        flex: 1,
        backgroundColor: "#b5d7de",
        alignItems: 'center',
        padding: 20
    },
    homeText: {
        marginBottom: 300,
        padding: 80,
        paddingTop: 20,
        backgroundColor: '#ecf0f1'
    },

    // Not working on Settings Screen - hence I've created it locally
    inlineScroll: {
        height: 100
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
        padding: 8,
    },

    // Not working on UserItem  - hence I've created it locally
    userImage: {
        width: 40,
        height: 40,
        marginRight: 10,
    },

    // Not working on UserItem  - hence I've created it locally
    onPressContainer: {
        flexDirection: 'column',
        margin: 10,
        alignItems: 'center',
    },
});
