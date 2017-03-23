import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = { loggedIn: false };
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
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
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
