import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {globalStyles} from "../../Styles";

export default class Payments extends Component {

    static navigationOptions = {
        title: 'Payments'
    }

    render() {
        return (
            <View style={globalStyles.content}>
                <Text style={globalStyles.h1}>Ind- og udbetalinger</Text>
                <View style={{height: 20,}}></View>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>12:45 - 10/10/2020:</Text>
                    <Text style={styles.negative}>-24kr.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>17:23 - 12/10/2020:</Text>
                    <Text style={styles.positive}>46kr.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>08:04 - 17/10/2020:</Text>
                    <Text style={styles.positive}>31kr.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>20:15 - 28/10/2020:</Text>
                    <Text style={styles.negative}>-57kr.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>09:32 - 03/11/2020:</Text>
                    <Text style={styles.positive}>14kr.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>10:27 - 07/11/2020:</Text>
                    <Text style={styles.negative}>-22kr.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>16:58 - 19/11/2020:</Text>
                    <Text style={styles.negative}>-17kr.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>08:16 - 24/11/2020:</Text>
                    <Text style={styles.positive}>34kr.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>22:17 - 28/11/2020:</Text>
                    <Text style={styles.negative}>10kr.</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>07:54 - 03/12/2020:</Text>
                    <Text style={styles.positive}>36kr.</Text>
                </View>
                <View style={styles.balance}>
                    <Text style={globalStyles.h3}>Balance:</Text>
                    <Text style={globalStyles.h3}>29kr.</Text>
                </View>
                <TouchableOpacity style={globalStyles.button} onPress={alert}>
                    <Text style={globalStyles.buttonText}>Afregn balance</Text>
                </TouchableOpacity>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    Text: {
        fontSize: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#b3b3b3',
        borderBottomWidth: 1,
    },
    textLabel: {
        fontSize: 17,
        marginVertical: 5,
    },
    negative: {
        color: '#A22525',
        fontSize: 17,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    positive: {
        color: '#32a225',
        fontSize: 17,
        marginVertical: 5,
        fontWeight: 'bold',
    },
    balance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 5,
        marginTop: 'auto',
    }
});