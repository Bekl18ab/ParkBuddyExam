import React,{ Component } from 'react'
import { Button, View, Text, StyleSheet, FlatList } from 'react-native';
import { globaleStyles } from '../Styles';
import {auth} from 'firebase';

export default class SettingsScreen extends Component {
    render() {
        const textInSettings = ("Settings");

        const logOff = () => {
            auth()
            .signOut()
            .then(() => console.log('User signed out!'));
        }
        
        return (
            <View style={{ flex: 1, justifyContent: 'top', alignItems: 'center' }}>
                <Text style={globaleStyles.styleHome}>
                <Text>
                    {textInSettings}
                </Text>
                </Text>
                <View style={globaleStyles.inlineScroll}>
                <FlatList
                data={carBrands}
                renderItem={renderCarBrandItem}
                keyExtractor={item => item}
                />
                <Button title="Sign off" onPress={logOff} />
                </View>
            </View>
        );
    }
}
