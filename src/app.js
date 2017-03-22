import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDAJkRyZsthYNVBPsckmyZrUx9TemTqWSg',
      authDomain: 'auth-44e6d.firebaseapp.com',
      databaseURL: 'https://auth-44e6d.firebaseio.com',
      storageBucket: 'auth-44e6d.appspot.com',
      messagingSenderId: '30884648426'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>

    );
  }
}
export default App;
