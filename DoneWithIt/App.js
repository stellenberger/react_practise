import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, SafeAreaView, TextInput } from "react-native";

export default function App() {
  const [value, onChangeText] = React.useState("useless placeholder");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello React Native</Text>
      <StatusBar style="auto" />
      <TextInput
        onChangeText={(text) => onChangeText(text)}
        value={value}
      ></TextInput>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
});
