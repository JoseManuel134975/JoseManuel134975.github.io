import React from "react";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Alert, TextInput, Button } from "react-native";

export default function App() {
  const [name, onChangeName] = useState("");
  const [pass, onChangePass] = useState("");

  const handleOnPress = () => {
    if(name === "Jose" && pass === "1234") {
      alert(`Usuario correcto`)
    } else {
      alert(`No existe ese usuario`)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Nombre"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePass}
        value={pass}
        placeholder="Contraseña"
      />
      <Button
        title="Press me"
        onPress={handleOnPress}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 120,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
