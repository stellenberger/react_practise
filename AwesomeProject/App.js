/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  Button,
  onPressLearnMore
} from 'react-native';
import axios from 'axios';

import { Header, Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [email, setEmail] = React.useState('example@example.com');
  const [password, setPassword] = React.useState('password');

  const handleSubmit = () => {
    console.log(email)
    console.log(password)
    axios.get("http://localhost:3001/api/v1/users", { withCredentials: true })
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Welcome</Text>
              <Text style={styles.sectionDescription}>Hello World!</Text>
            </View>
            <View style={styles.authentication}>
              <Text>Email</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => onChangeText(text)}
                value={email}
              />
              <Text>Password</Text>
              <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={(text) => onChangeText(text)}
                value={password}
                secureTextEntry={true}
              />
              <Button
                onPress={handleSubmit}
                title="Log In"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  authentication: {
    padding: 20,
    borderColor: 'pink',
    borderWidth: 1,
    borderRadius: 5,
    margin: 5,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
