import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../components/layout-components/layout-component";
import Categories from "../components/category/categories";
import Products from "../components/products/Products";
import Footer from "../components/layout-components/footer-component";


const Landing = () => {
    return (
        <Layout>
            <View style={styles.container}>
                <Categories />
                <Products/>
                <Footer style={styles.footer}/>
            </View>
            <Text>Landing Screen </Text>
        </Layout>
    );
};

export default Landing;

const styles = StyleSheet.create({
    container: {
        paddingBottom: 100,
        backgroundColor: "#ffffff",
    },
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