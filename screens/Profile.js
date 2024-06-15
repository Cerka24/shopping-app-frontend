import { View, Text, StyleSheet, ScrollView, Image, Pressable, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import InputBox from "../components/Form/InputBox";
import AntDesign from "react-native-vector-icons/AntDesign";


const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        const parsedData = JSON.parse(data);
        if (parsedData) {
          setUserData(parsedData);
          setName(parsedData.name);
          setEmail(parsedData.email);
          setPassword(parsedData.password);
          setAddress(parsedData.address);
          setCity(parsedData.city);
          setPhone(parsedData.phone);
        }
      } catch (error) {
        alert("Error retrieving data");
      }
    };
    loadUserData();
  }, []);

  const handleSave = async () => {
    const updatedUserData = { ...userData, name, address, city, phone };
    try {
      await AsyncStorage.setItem('userData', JSON.stringify(updatedUserData));
      setUserData(updatedUserData);
      setEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      alert("Error saving data");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: userData.profilePic }} style={styles.image} />
          <View style={styles.centeredTextContainer}>
            <Text style={styles.name}>
              Hi
              <Text style={{ color: "#1E90FF" }}> {userData.name} </Text> 👋
            </Text>
            <Text>email: {userData.email} </Text>
            <Text>contact: {userData.phone} </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.heading}>Profile Settings </Text>
            {editing ? (
              <>
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
                  placeholder={"Enter your password"}
                  value={password}
                  setValue={setPassword}
                  autoComplete={"password"}
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
                  placeholder={"Enter your city"}
                  value={city}
                  setValue={setCity}
                  autoComplete={"address-level2"}
                />
                <InputBox
                  style={styles.inputBox}
                  placeholder={"Enter your contact"}
                  value={phone}
                  setValue={setPhone}
                  autoComplete={"tel"}
                />
                <TouchableOpacity style={styles.btnContainer} onPress={handleSave}>
                  <Text style={styles.saveButton}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer} onPress={() => setEditing(false)}>
                  <Text style={styles.btnUpdateText}>Cancel</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                style={styles.btn}
                onPress={() => setEditing(true)}
              >
                <AntDesign style={styles.btnIcon} name="edit" />
                <Text style={styles.btnText}>Edit Profile </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("orders", { id: userData._id })}
              >
                <AntDesign style={styles.btnIcon} name="bars" />
                <Text style={styles.btnText}>My Orders </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("notifications")}
              >
                <AntDesign style={styles.btnIcon} name="bells" />
                <Text style={styles.btnText}>Notification </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btn}
                onPress={() =>
                    navigation.navigate("admin", { id: userData._id })
                }
                >
                <AntDesign style={styles.btnIcon} name="windows" />
                <Text style={styles.btnText}>Admin Panel </Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    
    scrollContainer: {
      flexGrow: 1,
      backgroundColor: "#ffffff",
    },
    container: {
      justifyContent: "center",
      alignItems: "center", 
      backgroundColor: "#ffffff",
      paddingHorizontal: 40,
      paddingVertical: 20,
    },
    imageContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
    },
    image: {
      height: 100,
      width: 100,
      borderRadius: 50,
      marginBottom: 20,
    },
    centeredTextContainer: {
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 20,
      paddingHorizontal: 20,
      marginHorizontal: 20,
    },
    name: {
      fontSize: 20,
      marginBottom: 10,
    },
      btnContainer: {
        width: "90%",
        padding: 20,
        paddingHorizontal: 75,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        elevation: 5,
      },
    heading: {
      fontSize: 20,
      fontWeight: "bold",
      paddingBottom: 10,
      textAlign: "center",
      borderBottomWidth: 1,
      borderColor: "lightgray",
      marginBottom: 10,
    },
    btn: {
      flexDirection: "row",
      alignItems: "center",
      marginVertical: 10,
      padding: 10,
      backgroundColor: "#ffffff",
      borderRadius: 5,
    },
    btnIcon: {
      fontSize: 20,
      marginRight: 10,
    },
    btnText: {
      fontSize: 15,
    },
    inputBox: {
      width: 300,
      marginHorizontal: 35,
    },
      btnUpdate: {
        backgroundColor: "#000000",
        color: "#ffffff",
        height: 50,
        borderRadius: 30,
        justifyContent: "center",
        marginHorizontal: 40,
        marginTop: 20,
        width: 280, 
        alignSelf: "center",
        },
      btnIcon: {
        fontSize: 20,
        marginRight: 10,
      },
      btnUpdateText: {
        color: "#000000",
        fontSize: 15,
        textAlign: "center",
        },
        saveButton: {
          color: "#1E90FF",
          fontSize: 17,
          textAlign: "center",
        }
});

export default Profile;


