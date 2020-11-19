import React,{Component, useEffect } from 'react'
import { Button, View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { globaleStyles } from '../Styles';
import {auth} from 'firebase';
import firebase from 'firebase';
import {useState} from 'react';
import { getThisAccountName } from '../helpers/Account';
import { TextInput } from 'react-native-paper';
import {getThisUser} from '../helpers/Account';
import { Ionicons } from '@expo/vector-icons';


//Funktion til at fremvise FlatList

function Item({ item }) {
    return (
      <View style={styles.listItem}>

          <TouchableOpacity style={{}}>
          <Text style={{fontWeight:"bold"}}>{"\n"}{item.setting}</Text>
          </TouchableOpacity>

        <View style={{alignItems:"center",flex:1}}>
        </View>

        <TouchableOpacity style={styles.touch}>
            {item.button}
        </TouchableOpacity>


      </View>
    );
  }

export default class SettingsScreen extends Component {

    state = {

        // Data oprettes men skal senere hentes fra Firebase database
         
          data:[
              {
                  "setting": "Personlige Oplysninger",
                  "button": <Ionicons name="ios-person" size={24}/>
              },
              {
                  
                  "setting": "Betalinger og udbetalinger",
                  "button": <Ionicons name="ios-card" size={24}/>
              
              },
              {
                 
                  "setting": "Kontoindstillinger",
                  "button": <Ionicons name="ios-cog" size={24}/>
                  
              }
          ]
        }
        
        
        // Oprettelse af FlatList, hvor den gemmer elementer i Item, som så kan bruges oppe i fremvisning af FlatListe funktionen
  
        render(){

          return (
            <View style={styles.container}>
              <FlatList
                style={{flex:1}}
                data={this.state.data}
                renderItem={({ item }) => <Item item={item}/>}
                keyExtractor={item => item.item}
              />
            </View>
          );
        }
      }


/*

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
            her */


            {/* <View style={globaleStyles.inlineScroll}> */}
            // her <View style={globaleStyles.signOut}>

            {/* <FlatList
            data={carBrands}
            renderItem={renderCarBrandItem}
            keyExtractor={item => item}
            /> */}
           
           /* her 
                <Button title="Sign off" onPress={logOff} />
            </View>
        </View>
    );
}
her */

// export default SettingsScreen;



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop:70
    },
    listItem:{
        margin:5,
        padding:1,
        backgroundColor:"#FFF",
        width:"80%",
        flex:1,
        alignSelf:"center",
        flexDirection:"row",
        borderRadius:5
    },
    touch:{
      height:50,
      width:50, 
      justifyContent:"center",
      alignItems:"center"
  }
});
