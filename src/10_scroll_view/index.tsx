import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const Index = () => {
  return (
    <SafeAreaView>
      <ScrollView
        style={{backgroundColor: '#dfb'}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        <Text style={styles.category}>Category A</Text>
        <Text style={styles.category}>Category B</Text>
        <Text style={styles.category}>Category C</Text>
        <Text style={styles.category}>Category D</Text>
        <Text style={styles.category}>Category E</Text>
        <Text style={styles.category}>Category F</Text>
        <Text style={styles.category}>Category H</Text>
        <Text style={styles.category}>Category J</Text>
        <Text style={styles.category}>Category K</Text>
      </ScrollView>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{margin: 30}}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32. The standard chunk of
          Lorem Ipsum used since the 1500s is reproduced below for those
          interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form,
          accompanied by English versions from the 1914 translation by H.
          Rackham.
        </Text>
        <View style={{height: Platform.OS === 'ios' ? 50 : 100}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Index;

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  scrollView: {
    backgroundColor: '#ddd',
    marginHorizontal: 20,
  },
  category: {
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});
