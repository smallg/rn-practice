import {
  Alert,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Index = () => {
  const [refreshing, updateRefreshing] = useState(false);

  const loadData = () => {
    console.log('x');
    updateRefreshing(true);
    setTimeout(() => {
      // Alert.alert('', 'down refresh');
      updateRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        horizontal={false}
        initialScrollIndex={1}
        initialNumToRender={2}
        numColumns={2}
        ItemSeparatorComponent={() => {
          return <View style={styles.separator} />;
        }}
        ListEmptyComponent={() => {
          return <Text>No items</Text>;
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

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'red',
    marginHorizontal: 16,
  },
});
