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

export default class reactTutorialApp extends Component {
  constructor() {
    super()
    this.state = {
      text: 'Hello Abhinav Bahiya'
    }
  }

  deleteText = () => {
      this.setState({
        text: ''
      })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text onPress = {this.deleteText }>
          {this.state.text}
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('reactTutorialApp', () => reactTutorialApp);
