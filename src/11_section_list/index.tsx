import {
  Alert,
  SafeAreaView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';

const DATA = [
  {
    title: 'Main dishes',
    data: ['Pizza', 'Burger', 'Risotto'],
  },
  {
    title: 'Sides',
    data: ['French Fries', 'Onion Rings', 'Fried Shrimps'],
  },
  {
    title: 'Drinks',
    data: ['Water', 'Coke', 'Beer'],
  },
  {
    title: 'Desserts',
    data: ['Cheese Cake', 'Ice Cream'],
  },
];

const Index = () => {
  const [refreshing, updateRefreshing] = useState(false);

  const loadData = () => {
    updateRefreshing(true);
    setTimeout(() => {
      Alert.alert('', 'down refresh');
      updateRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.header}>{title}</Text>
        )}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        ListEmptyComponent={() => {
          return <Text>No items</Text>;
        }}
        ListHeaderComponent={() => {
          return <Text>List</Text>;
        }}
        ListFooterComponent={() => {
          return <Text>No more items</Text>;
        }}
        refreshing={refreshing}
        onRefresh={loadData}
        onEndReachedThreshold={0.1}
        onEndReached={loadData}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
  },
});

export default Index;
