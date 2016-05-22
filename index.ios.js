/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

function counter(state = 0, action) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1;
  case 'DECREMENT':
    return state - 1;
  default: 
    return state;
  }
}

let store = createStore(counter);

store.subscribe(() => {
  console.log(store.getState())
}); 

class ReduxDemo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {store.getState()}
        </Text>
        <Text style={styles.welcome} onPress={ () => { store.dispatch({type:"INCREMENT"})} }>
          INCREMENT
        </Text>
        <Text style={styles.welcome} onPress={ () => { store.dispatch({type: "DECREMENT" })} }>
          DECREMENT
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('ReduxDemo', () => ReduxDemo);
