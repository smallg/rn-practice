import {StyleSheet, SafeAreaView, Image, Dimensions} from 'react-native';
import React, {Component} from 'react';

export default class index extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Image
          style={[styles.tinyLogo]}
          source={require('./images/tiny_logo.png')}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={styles.logo}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
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
  image: {
    // height: Dimensions.get('window').height,
    // width: Dimensions.get('window').width,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    marginVertical: 10,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
