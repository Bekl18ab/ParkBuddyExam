import React, {Component} from 'react'
import {View, Text, StyleSheet, Button, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import {globalStyles} from "../../Styles";

export default class Profile extends Component {

    static navigationOptions = {
        title: 'Profile'
    }

    render() {
        return (
            <View style={globalStyles.content}>
                <Text style={styles.title}>Profiloplysninger</Text>
                <View style={styles.row}>
                    <Text style={styles.textLabel}>Navn:</Text>
                    <TextInput
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
                    <Text style={styles.textLabel}>Email:</Text>
                    <TextInput
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
                    <Text style={styles.textLabel}>Kode:</Text>
                    <TextInput
                        style={styles.input}
                        onFocus={() => {
                            //
                        }}
                        onBlur={() => {
                            //
                        }}
                    />
                </View>
                <TouchableOpacity style={globalStyles.button} onPress={alert}>
                    <Text style={globalStyles.buttonText}>Gem oplysninger</Text>
                </TouchableOpacity>
                <Text style={globalStyles.h3}>Handelsbetingelser</Text>
                <ScrollView>
                    <Text style={{textAlign: 'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Enim ut sem viverra aliquet eget sit amet tellus. Felis imperdiet
                        proin fermentum leo vel. Eu mi bibendum neque egestas congue quisque egestas. Amet venenatis
                        urna
                        cursus eget. Turpis massa sed elementum tempus egestas sed sed risus pretium. Feugiat sed lectus
                        vestibulum mattis ullamcorper velit sed ullamcorper. Sagittis aliquam malesuada bibendum arcu
                        vitae
                        elementum. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. Laoreet
                        non
                        curabitur gravida arcu ac tortor. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo
                        nec.
                        Felis imperdiet proin fermentum leo vel orci porta. At auctor urna nunc id cursus metus aliquam.
                        Eget mi proin sed libero enim sed faucibus turpis.

                        Aliquet bibendum enim facilisis gravida neque. Dignissim convallis aenean et tortor at risus
                        viverra
                        adipiscing at. Sed tempus urna et pharetra pharetra. Scelerisque purus semper eget duis at.
                        Viverra
                        ipsum nunc aliquet bibendum enim facilisis gravida neque. Mauris ultrices eros in cursus turpis
                        massa tincidunt. Quam pellentesque nec nam aliquam sem et tortor consequat. Etiam sit amet nisl
                        purus in mollis. Feugiat vivamus at augue eget arcu dictum varius duis at. Quam nulla porttitor
                        massa id neque aliquam vestibulum. Nibh nisl condimentum id venenatis a.

                        Congue mauris rhoncus aenean vel elit. Duis tristique sollicitudin nibh sit amet. Ipsum dolor
                        sit
                        amet consectetur adipiscing. Mollis nunc sed id semper. Volutpat commodo sed egestas egestas.
                        Odio
                        aenean sed adipiscing diam donec adipiscing tristique risus nec. Quis hendrerit dolor magna eget
                        est. Orci ac auctor augue mauris augue neque gravida in fermentum. Adipiscing elit pellentesque
                        habitant morbi tristique senectus. Volutpat commodo sed egestas egestas fringilla phasellus
                        faucibus
                        scelerisque. Malesuada proin libero nunc consequat interdum varius. Mi tempus imperdiet nulla
                        malesuada pellentesque elit eget gravida cum. Morbi tincidunt ornare massa eget. Cras fermentum
                        odio
                        eu feugiat pretium nibh ipsum consequat. Nunc congue nisi vitae suscipit tellus.

                        Dui id ornare arcu odio. Aliquet nibh praesent tristique magna. Et molestie ac feugiat sed
                        lectus
                        vestibulum. Enim sed faucibus turpis in eu mi. Fusce ut placerat orci nulla pellentesque
                        dignissim
                        enim sit amet. Interdum varius sit amet mattis. Elementum curabitur vitae nunc sed velit
                        dignissim.
                        Et malesuada fames ac turpis egestas. Aenean sed adipiscing diam donec adipiscing. Quis risus
                        sed
                        vulputate odio ut enim blandit volutpat maecenas. Donec enim diam vulputate ut pharetra. Ac
                        tortor
                        dignissim convallis aenean et tortor at. Non enim praesent elementum facilisis leo vel fringilla
                        est
                        ullamcorper. Sed libero enim sed faucibus turpis in.

                        Eget arcu dictum varius duis. Quam viverra orci sagittis eu volutpat odio facilisis mauris sit.
                        Diam
                        maecenas ultricies mi eget mauris pharetra et ultrices. Nec feugiat in fermentum posuere. Turpis
                        massa sed elementum tempus egestas sed sed risus. Euismod lacinia at quis risus sed vulputate
                        odio
                        ut enim. Quam viverra orci sagittis eu. Cursus risus at ultrices mi tempus imperdiet nulla
                        malesuada
                        pellentesque. Mollis nunc sed id semper risus in hendrerit gravida. Morbi tempus iaculis urna id
                        volutpat lacus laoreet non curabitur. Tellus cras adipiscing enim eu turpis egestas pretium
                        aenean.
                        Amet nulla facilisi morbi tempus iaculis urna. Eu ultrices vitae auctor eu augue ut.</Text>
                </ScrollView>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        alignContent: 'stretch'
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 30,
    },
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
        shadowOpacity: 0.2,
        shadowRadius: 2,
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        marginHorizontal: 10,
    },
});