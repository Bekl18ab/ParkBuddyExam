import React,{ useEffect } from 'react'
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import { globaleStyles } from '../Styles';
import {auth} from 'firebase';
import firebase from 'firebase';
import {useState} from 'react';
import { getThisAccountName } from '../helpers/Account';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import {getThisUser} from '../helpers/Account';

const SettingsScreen = () => {
    const [ accountName, setAccountName ] = useState("")

    getThisAccountName().then((name) => {
        setAccountName(name)
    })

    useEffect(() => {
        //re-render
    }, [accountName])


    const textInSettings = ("Settings");

    const logOff = () => {
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    }

    const handleChangeAccountName = (e) => {
        setAccountName(e)
        firebase.database().ref('accounts/'+getThisUser()).set({
            accountName: e
          })
    };
    

    return (
        <View style={{ flex: 1/2, justifyContent: 'top', alignItems: 'center' }}>
            <Text style={globaleStyles.styleHome}>
            <Text>
                {textInSettings}
            </Text>
            </Text>
            <Text>
                Account name:
            </Text>
            <TextInput 
                placeholder=""
                value={accountName}
                onChangeText={(e) => handleChangeAccountName(e) }
            />
            {/* <View style={globaleStyles.inlineScroll}> */}
            <View style={globaleStyles.signOut}>
            {/* <FlatList
            data={carBrands}
            renderItem={renderCarBrandItem}
            keyExtractor={item => item}
            /> */}
            <Button title="Sign off" onPress={logOff} />
            </View>
        </View>
    );
}

export default SettingsScreen;
