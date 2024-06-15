import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Layout from "../../components/layout-components/layout-component";
import OrderItem from "../../components/Form/OrderItem";
import { orderData } from "../../data/OrderData";


const Orders = () => {
  return (
    <Layout>
      <View style={styles.container}>
        <Text style={styles.heading}>My Orders</Text>
        <ScrollView>
          {orderData.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </ScrollView>
      </View>
    </Layout>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        backgroundColor: "#ffffff",
      },
      scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
        backgroundColor: "#ffffff",
      },
      heading: {
        textAlign: "center",
        color: "#000000",
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
      },
});
export default Orders;