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
import AppContainer from './AppContainer';
import reducer from './reducer';

let store = createStore(reducer);

class ReduxDemo extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('ReduxDemo', () => ReduxDemo);
