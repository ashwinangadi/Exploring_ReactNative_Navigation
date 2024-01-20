import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <Text>Home</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.push('Details', {
            productId: '86',
          })
        }
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
