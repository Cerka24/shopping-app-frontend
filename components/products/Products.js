import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import ProductsCard from "./productsCard";
import { ProductsData } from "../../data/productsData";


const Products = () => {
    return (
        <ScrollView>
            <View>
                {ProductsData?.map((p) => (
                    <ProductsCard key={p._id} p={p} />
                ))}
            </View> 
        </ScrollView>
    );
};

export default Products;

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
  });