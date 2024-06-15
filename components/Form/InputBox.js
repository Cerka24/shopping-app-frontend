import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const InputBox = ({ 
    value,
    setValue,
    autoComplete, 
    placeholder, 
    secureTextEntry,
    style 
  }) => {
    return (
        <View style={[styles.container, style]}>
            <TextInput 
            style={styles.input} 
            autoComplete={autoComplete} 
            placeholder={placeholder}
            autoCorrect={false}
            secureTextEntry={secureTextEntry}
            value={value}
            onChangeText={(text) => setValue(text) }
            />
        </View>
    );
};

export default InputBox;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    width: "100%", 
  },
  input: {
    width: "100%",
    backgroundColor: "#ffffff",
    height: 40,
    paddingLeft: 15,
    borderRadius: 30,
    color: "#000000",
    borderWidth: 1,
    borderColor: "gray",
  }
});