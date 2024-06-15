import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { categoriesData } from "../../data/categoryData";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from "@react-navigation/native";


const Categories = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <View style={styles.container}>
                {categoriesData?.map((item) => (
                    <View key={item._id} style={styles.categoriesContainer}>
                        <TouchableOpacity style={styles.categoriesContainer} onPress={() => navigation.navigate(item.path)}>
                        <FontAwesome name={item.icon} style={styles.icon}/>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>
                    </View>
                ))}
            </View> 
        </ScrollView>
    );
};

export default Categories;

const styles = StyleSheet.create({
    categoriesContainer: {
        padding: 8,
        justifyContent: "center",
        alignItems: "center",
    },
    container: {
        backgroundColor:"#ffffff",
        flexDirection: "row",
        width: "100%",
    },
    icon: {
        color: "#000000",
        fontSize: 30,
    }
  });