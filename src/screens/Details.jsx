import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Details = ({route}) => {
  const {productId} = route.params;

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details: {productId}</Text>
      <Button
        title="Go to Home"
        // onPress={() => navigation.navigate("Home")}
        onPress={() => navigation.goBack()}
      />
      <Button
        title="Go back to first scren"
        // onPress={() => navigation.pop(2)}
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallText: {
    color: '#000000',
    fontSize: 16,
  },
});
