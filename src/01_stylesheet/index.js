import {StyleSheet, Text, View} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  render() {
    return (
      <View>
        <Text style={{fontSize: 30, marginTop: 50, marginLeft: 30}}>index</Text>
        <Text style={styles.h1}>h1 text</Text>
        <Text style={styles.h2}>h2 text</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  h1: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  h2: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});
