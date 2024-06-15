import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputBox from "../../components/Form/InputBox";

const Login = ({ navigation }) => {
  const loginImage = require('../../assets/login.png');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      return alert("Please add email or password");
    }
    try {
      const userData = await AsyncStorage.getItem('userData');
      const parsedUserData = JSON.parse(userData);
      if (parsedUserData && parsedUserData.email === email && parsedUserData.password === password) {
        alert("Your login was successful.");
        navigation.navigate('landing');
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      alert("Error retrieving data");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={loginImage} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.boldText}>Welcome Back!</Text>
        <Text>Please sign in to continue to your account.</Text>
      </View>
      <InputBox
        placeholder={"Enter Your Email"} 
        style={styles.inputBox}
        value={email} 
        setValue={setEmail}
        autoComplete={"email"}
      />
      <InputBox
        style={styles.inputBox}
        value={password} 
        setValue={setPassword}
        placeholder={"Enter Your Password"} 
        secureTextEntry={true}
      />
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
          <Text style={styles.loginBtnText}>Sign In</Text>
        </TouchableOpacity>
        <Text>You don't have an account?
          <Text style={styles.registerBtn} onPress={() => navigation.navigate("register")}> Click to sign up.</Text>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        marginBottom: 25,
        backgroundColor: "#ffffff",
    },
    boldText: {
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
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
        marginVertical: 20,
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

  export default Login;