import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
  },
  input: {
    // border: '1px solid #f2f2f2',
    height: 38,
    paddingLeft: 5,
  },
  error: {
    height: 24,
    fontSize: 10,
    color: 'red',
  },
});

const TextInputLayout = ({ errMsg, ...rest }) => (
  <View style={styles.container}>
    <TextInput {...rest} style={styles.input} />
    <View style={styles.error}><Text>{errMsg}</Text></View>
  </View>
);

export default TextInputLayout;

