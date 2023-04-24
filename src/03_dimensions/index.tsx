import {Text, StyleSheet, View, SafeAreaView, Dimensions} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.item}>
          <Text style={styles.h3}>Scan</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.h3}>Pay</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.h3}>Card</Text>
        </View>
        <View style={styles.item}>
          <Text style={styles.h3}>Me</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  h3: {
    fontSize: 24,
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
    backgroundColor: '#00b38a',
    width: Dimensions.get('window').width / 3,
    height: 90,
  },
});
