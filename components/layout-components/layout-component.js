import { View, Text, StyleSheet,ScrollView } from "react-native";
import React from "react";
import Header from "./header-component";
import { StatusBar } from "expo-status-bar";
import Footer from "./footer-component";


const Layout = ({ children }) => {
    return (
      <ScrollView>
        <>
        <StatusBar />
        <Header />
        <Text>{children} </Text>
        </> 
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    footer: {
      display: "flex",
      width: "100%",
      flex: 1,
      justifyContent: "flex-end",
      zIndex: 100,
      borderTopWidth: 1,
      borderColor: "lightgray",
      position: "absolute",
      bottom: 0,
      padding: 10,
    },
  });

export default Layout;