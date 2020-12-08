import * as React from 'react';
import {
    Text,
    View,
    TextInput,
    ActivityIndicator,
    StyleSheet,
    Button
} from 'react-native';
import firebase from 'firebase';
import MainNavigation from '../Navigation/Main';
import {globalStyles} from '../Styles';
// import {TouchableOpacity} from "react-native-web";

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        isLoading: false,
        isCompleted: false,
        errorMessage: null,
    };

    //Laver et tænkesymbol, når den loader
    startLoading = () => this.setState({isLoading: true});
    //Stopper tænkesymbolet, når den er færdig med at loade
    endLoading = () => this.setState({isLoading: false});
    setError = errorMessage => this.setState({errorMessage});
    clearError = () => this.setState({errorMessage: null});
    handleChangeEmail = email => this.setState({email});
    handleChangePassword = password => this.setState({password});

    handleSubmit = async () => {
        const {email, password} = this.state;
        try {
            this.startLoading();
            this.clearError();

            // Here the data is passed to the service and we wait for the result
            //await dummySignUp(email, password);

            //connecting with firebase
            const result = await firebase
                .auth()
                .signInWithEmailAndPassword(email, password);

            this.endLoading();
            this.setState({isCompleted: true});
        } catch (error) {
            this.setError(error.message);
            this.endLoading();
        }
    };

    render = () => {
        const {errorMessage, email, password, isCompleted} = this.state;
        if (isCompleted) {
            return <MainNavigation auth={isCompleted}/>;
        } else
            return (
                <View>
                    <Text style={globalStyles.h1}>Log ind</Text>
                    <TextInput
                        placeholder="email"
                        value={email}
                        onChangeText={this.handleChangeEmail}
                        style={globalStyles.label}
                    />
                    <TextInput
                        placeholder="password"
                        value={password}
                        onChangeText={this.handleChangePassword}
                        secureTextEntry
                        style={globalStyles.label}
                    />
                    {errorMessage && (
                        <Text style={globalStyles.error}>Error: {errorMessage}</Text>
                    )}
                    {this.renderButton()}
                </View>
            );
    };

    renderButton = () => {
        const {isLoading} = this.state;
        if (isLoading) {
            return (
            <View>
            <ActivityIndicator/>
            </View>
            )}
        return (
        <View>
        <Button title="Learn More" style={globalStyles.button} onPress={this.handleSubmit}>
            <Text style={globalStyles.buttonText}>Log ind</Text>
        </Button>
        </View>
        )};
}
