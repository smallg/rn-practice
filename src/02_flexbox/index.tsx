import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  useColorScheme,
  ScrollView,
} from 'react-native';
import React from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function Index(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView>
        <Text>main cors</Text>
        <View>
          <Text>flex direction: 'column', default</Text>
          <View style={styles.container}>
            <Text style={styles.item}>1</Text>
            <Text style={styles.item}>2</Text>
            <Text style={styles.item}>1</Text>
          </View>
          <Text>flex direction: 'column-reverse'</Text>
          <View style={[styles.container, styles.flexColumnReverse]}>
            <Text style={styles.item}>1</Text>
            <Text style={styles.item}>2</Text>
            <Text style={styles.item}>3</Text>
          </View>
          <Text>flex direction: 'row'</Text>
          <View style={[styles.container, styles.flexRow]}>
            <Text style={styles.item}>1</Text>
            <Text style={styles.item}>2</Text>
            <Text style={styles.item}>3</Text>
          </View>
          <Text>flex direction: 'row-reverse'</Text>
          <View style={[styles.container, styles.flexRowReverse]}>
            <Text style={styles.item}>1</Text>
            <Text style={styles.item}>2</Text>
            <Text style={styles.item}>3</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  item: {
    height: 30,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'green',
    padding: 4,
    textAlign: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
});

export default Index;
