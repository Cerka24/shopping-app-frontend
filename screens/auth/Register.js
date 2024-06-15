import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useReduxStateHook } from "../../hooks/customHooks";
import InputBox from "../../components/Form/InputBox";

const Register = ({ navigation }) => {
  const dispatch = useDispatch();      
  
  const loginImage = require('../../assets/register.jpg');
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("Bosnia and Herzegovina");

  const handleRegister = async () => {
    if (!email || !password || !name || !address || !city || !phone) {
      return alert("Please provide all fields client side");
    }
    const formData = {
      email, password, name, address, city, phone, country: "Bosnia and Herzegovina"
    };
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(formData));
      alert("Registration successful!");
      navigation.navigate("login");
    } catch (error) {
      alert("Error saving data");
    }
  };

  const loading = useReduxStateHook(navigation, "login");
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image source={loginImage} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.boldText}>Hello! Welcome to <Text style={styles.gadgetShop}>GadgetShop</Text></Text>
          <Text>Please sign up to create your account.</Text>
        </View>
        <InputBox
          style={styles.inputBox} 
          placeholder={"Enter your name"}
          value={name}
          setValue={setName}
          autoComplete={"name"}
        />
        <InputBox
          style={styles.inputBox}
          placeholder={"Enter your email"}
          value={email}
          setValue={setEmail}
          autoComplete={"email"}
        />
        <InputBox
          style={styles.inputBox}
          value={password}
          setValue={setPassword}
          placeholder={"Enter your password"}
          secureTextEntry={true}
        />
        <InputBox
          style={styles.inputBox}
          placeholder={"Enter your city"}
          value={city}
          setValue={setCity}
          autoComplete={"country"}
        />
        <InputBox
          style={styles.inputBox}
          placeholder={"Enter your address"}
          value={address}
          setValue={setAddress}
          autoComplete={"address-line1"}
        />
        <InputBox
          style={styles.inputBox}
          placeholder={"Enter your contact"}
          value={phone}
          setValue={setPhone}
          autoComplete={"name"}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.loginBtn} onPress={handleRegister}>
            <Text style={styles.loginBtnText}>Sign Up</Text>
          </TouchableOpacity>
          <Text>You already have an account?
            <Text style={styles.registerBtn} onPress={() => navigation.navigate("login")}> Click to sign in</Text>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};


export default Register;


const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: "center",
    },
    container: {
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#ffffff",
    },
    image: {
        height: 200,
        width: "100%",
        resizeMode: "contain",
    },
    gadgetShop: {
        color: "#1E90FF",
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginBottom: 10,
        backgroundColor: "#ffffff",
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 19.5,
        textAlign: "center",
        marginBottom: 5,

    },
    inputBox: {
        width: "80%",
        marginHorizontal: 35,
    },
    btnContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    loginBtn: {
        backgroundColor: "#000000",
        width: "80%",
        justifyContent: "center",
        height: 40,
        borderRadius: 30,
        alignItems: "center",
        marginHorizontal: 20,
        marginVertical: 10,
    },
    loginBtnText: {
        color: "#ffffff",
        textAlign: "center",
        fontWeight: "500",
        fontSize: 16,
    },
    registerBtn: {
        color: "#1E90FF",
    }
  });