import {
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableHighlight onPress={() => Alert.alert('')}>
        <Text>touch highlight</Text>
      </TouchableHighlight>
      <TouchableOpacity onPress={() => Alert.alert('')}>
        <Text>touch highlight</Text>
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => Alert.alert('')}>
        <Text>touch highlight</Text>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
