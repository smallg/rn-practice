import {
  SafeAreaView,
  StyleSheet,
  ActivityIndicator,
  Platform,
  Alert,
} from 'react-native';
import React from 'react';

export default function index() {
  if (Platform.OS === 'android') {
    Alert.alert('android');
  } else if (Platform.OS === 'ios') {
    Alert.alert('ios');
  }
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator color={'blue'} size={'small'} />
      <ActivityIndicator color={'green'} size={'large'} />
      <ActivityIndicator color={'#d3d3d3'} size={70} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
