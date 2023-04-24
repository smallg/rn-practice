import {StyleSheet, SafeAreaView, Button, Alert} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  customAlert = () => {
    Alert.alert('title', 'content', [
      {text: 'Cancel', style: 'cancel', onPress: () => Alert.alert('cancel')},
      {
        text: 'Confirm',
        style: 'default',
        onPress: () => Alert.alert('confirm'),
      },
    ]);
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Button
          title="alert"
          onPress={() => {
            Alert.alert('alert');
          }}
        />
        <Button title="alert" onPress={this.customAlert} color="green" />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
