import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Header = () => {

    const [search, setSearch] = useState("");
    const handleSearch = () => {
        console.log(search);
        setSearch("");
    }

    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <TextInput style={styles.inputBox} value={search} onChange={(text) => setSearch(text)}/>
                <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
                    <FontAwesome name="search" style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View> 
    );
};

export default Header;

const styles = StyleSheet.create({
    mainContainer: {
        height: 90,
        backgroundColor: "darkgrey"
    },
    container: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 25,
    },
    inputBox: {
        borderWidth: 0.3,
        width: "100%",
        position: "absolute",
        left: 25,
        height: 45,
        color: "#000000",
        backgroundColor: "#ffffff",
        paddingLeft: 25,
        fontSize: 18,
        borderRadius: 10
    },
    searchButton: {
        position: 'absolute',
        left: "98%",
    },
    icon: {
        color: "#000000",
        fontSize: 15,
    }
  });