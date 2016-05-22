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


class App extends Component { 
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.welcome}>
            {this.props.state}
          </Text>
          <Text style={styles.welcome} onPress={ this.props.incrementAction }>
            INCREMENT
          </Text>
          <Text style={styles.welcome} onPress={ this.props.decrementAction }>
            DECREMENT
          </Text>
        </View>
    );
  }
}

export default App;

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
