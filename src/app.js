import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Button, Header, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: null };
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDAJkRyZsthYNVBPsckmyZrUx9TemTqWSg',
      authDomain: 'auth-44e6d.firebaseapp.com',
      databaseURL: 'https://auth-44e6d.firebaseio.com',
      storageBucket: 'auth-44e6d.appspot.com',
      messagingSenderId: '30884648426'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <CardSection>
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        </CardSection>);
      case false:
        return <LoginForm />;
      default:
        return <View style={{ marginTop: 300 }}><Spinner size="large" /></View>;
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>

    );
  }
}
export default App;
