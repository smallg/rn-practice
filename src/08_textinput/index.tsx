import {
  Alert,
  Button,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Index = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const login = () => {
    Alert.alert('title', username);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        autoFocus={true}
        placeholder="Please input username"
      />
      <TextInput
        secureTextEntry={true}
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Please input password"
      />
      <TextInput
        style={styles.input}
        keyboardType="number-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Please input phone number"
      />
      <TextInput
        style={styles.input}
        multiline={true}
        numberOfLines={5}
        placeholder="comments"
      />
      <View>
        <Button title="login" onPress={login} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    width: Dimensions.get('window').width - 40,
    margin: 20,
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
  },
});

export default Index;
