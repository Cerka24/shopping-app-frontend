import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import AntDesign from "react-native-vector-icons/AntDesign";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Footer = () => {
    const route = useRoute();
    const navigation = useNavigation();

    const handleLogout = () => {
      alert("You have been logged out.");
      navigation.navigate('login');
    };

    const clearAllData = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        await AsyncStorage.multiRemove(keys);
        console.log('AsyncStorage cleared successfully.');
        navigation.navigate('login');
      } catch (error) {
        console.error('Error clearing AsyncStorage:', error);
      }
    };

    return (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.menuContainer}
            onPress={() => navigation.navigate("landing")}
          >
            <AntDesign
              style={[styles.icon, route.name === "landing" && styles.active]}
              name="home"
            />
            <Text style={[styles.iconText, route.name === "landing" && styles.active]}>
              Home
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuContainer}
            onPress={() => navigation.navigate("notifications")}
          >
            <AntDesign
              style={[styles.icon, route.name === "notifications" && styles.active]}
              name="bells"
            />
            <Text
              style={[
                styles.iconText,
                route.name === "notifications" && styles.active,
              ]}
            >
              notification
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuContainer}
            onPress={() => navigation.navigate("profile")}
          >
            <AntDesign
              style={[styles.icon, route.name === "profile" && styles.active]}
              name="user"
            />
            <Text
              style={[styles.iconText, route.name === "profile" && styles.active]}
            >
              Account
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuContainer}
            onPress={clearAllData}
          >
            <AntDesign style={styles.icon} name="logout" />
            <Text style={styles.iconText}>Logout</Text>
          </TouchableOpacity>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        backgroundColor: "#ffffff",
      },
      menuContainer: {
        alignItems: "center",
        justifyContent: "center",
      },
      icon: {
        fontSize: 25,
        color: "#000000",
      },
      iconText: {
        color: "#000000",
        fontSize: 10,
      },
      active: {
        color: "blue",
      },
    });
    export default Footer;
