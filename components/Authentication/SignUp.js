import * as React from 'react';
import {
  Text,
  View,
  TextInput,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import firebase from 'firebase';
import { globalStyles } from '../Styles';
import {getThisUser} from '../helpers/Account';

export default class SignUpForm extends React.Component {
  state = {
    email: '',
    password: '',
    accountName: '',
    isLoading: false,
    isCompleted: false,
    errorMessage: null,
  };

  //Laver et tænkesymbol, når den loader
  startLoading = () => this.setState({ isLoading: true });
  //Stopper tænkesymbolet, når den er færdig med at loade
  endLoading = () => this.setState({ isLoading: false });
  setError = errorMessage => this.setState({ errorMessage });
  clearError = () => this.setState({ errorMessage: null });
  handleChangeEmail = email => this.setState({ email });
  handleChangeAccountName = accountName => this.setState({accountName});
  handleChangePassword = password => this.setState({ password });

  handleSubmit = async () => {
    const { email, password, accountName } = this.state;

    try {
      this.startLoading();
      this.clearError();

      // Here the data is passed to the service and we wait for the result
      //await dummySignUp(email, password);

      //connecting with firebase and saving accounts with the created user id from firebase
      firebase.auth().createUserWithEmailAndPassword(email, password).then(() => {
        firebase.database().ref('accounts/'+getThisUser()).set({
          accountName: accountName
        });
      });

      this.endLoading();
      this.setState({ isCompleted: true });
    } catch (error) {
      this.setError(error.message);
      this.endLoading();
    }
  };

  render = () => {
    const { errorMessage, email, password, isCompleted, accountName } = this.state;
    if (isCompleted) {
      return <Text>You are now signed up</Text>;
    }


    return (
      <View>
        <Text style={globalStyles.h1}>Opret en bruger</Text>
        <TextInput
          placeholder="account name"
          value={accountName}
          onChangeText={this.handleChangeAccountName}
          style={globalStyles.label}
        />
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
    const { isLoading } = this.state;
    if (isLoading) {
      return (
      <View>
      <ActivityIndicator />
      </View>
      )}
    return (
    <View>
     <TouchableOpacity style={globalStyles.button} onPress={this.handleSubmit}>
      <Text style={globalStyles.buttonText}>Opret bruger</Text>
    </TouchableOpacity>
    </View>
    )};
}
