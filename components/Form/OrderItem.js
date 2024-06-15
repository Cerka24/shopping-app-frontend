import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const deviceWidth = Dimensions.get('window').width;

const OrderItem = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.orderinfo}>
        <Text style={styles.orderDate}>Date: {order.date} </Text>
      </View>
      <Text style={styles.productName}>Product Name: {order.productInfo.name} </Text>
      <Text style={styles.productDetails}>Price: ${order.productInfo.price} </Text>
      <Text style={styles.productDetails}>Quantity: {order.productInfo.qty} </Text>
      <Text style={styles.totalAmount}>Total Amount: ${order.totalAmount} </Text>
      {/* <Text style={styles.status}>Order Status: {order.status}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    width: deviceWidth - 30, 
    alignSelf: 'center', 
  },
  orderinfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#e0e0e0",
    paddingBottom: 8,
    marginBottom: 10,
  },
  orderDate: {
    fontSize: 14,
    color: "#6c757d",
  },
  productName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#343a40",
  },
  productDetails: {
    fontSize: 14,
    color: "#495057",
    marginBottom: 3,
  },
  totalAmount: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    color: "#28a745",
  },
  status: {
    borderTopWidth: 1,
    fontWeight: "bold",
    borderColor: "#e0e0e0",
    paddingTop: 5,
    marginTop: 10,
    color: "#17a2b8",
  },
});

export default OrderItem;
