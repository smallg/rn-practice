import {Text, StyleSheet, StatusBar, SafeAreaView, Switch} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hideStatusBar: false,
    };
  }

  toggleStatusBar = () => {
    this.setState({
      hideStatusBar: !this.state.hideStatusBar,
    });
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={this.state.hideStatusBar} backgroundColor="red" />
        <Text>index</Text>
        <Switch
          trackColor={{false: 'red', true: 'green'}}
          thumbColor={'blue'}
          value={this.state.hideStatusBar}
          onValueChange={this.toggleStatusBar}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
