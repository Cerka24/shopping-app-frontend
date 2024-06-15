import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Landing from './screens/LandingScreen';
import Info from './screens/InfoScreen';
import Login from './screens/auth/Login';
import Register from './screens/auth/Register';
import Profile from './screens/Profile';
import Orders from './screens/account/Orders';
import Notifications from './screens/account/Notifications';
import AdminDashboard from './screens/admin/AdminDashboard';
import { useEffect, useState } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import ProductDetails from './screens/ProductDetails';
import { Provider } from 'react-redux';
import store from "./redux/store";

const Stack = createNativeStackNavigator()

export default function App() {
  const [isAuth, setIsAuth] = useState(null);
  
  useEffect(() => {
    const getUserLocalData = async () => {
      let data = await AsyncStorage.getItem("@auth");
      setIsAuth(data);
      
      console.log("user login data ==>", data);
    };
    getUserLocalData();
  }, []);
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="login">
          <Stack.Screen
            name="landing"
            component={Landing}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="orders" component={Orders} />
          <Stack.Screen name="profile" component={Profile} />
          <Stack.Screen name="notifications" component={Notifications} />
          <Stack.Screen name="admin" component={AdminDashboard} />
          <Stack.Screen name="mobile" component={Info} />
          <Stack.Screen name="productDetails" component={ProductDetails} options={{ headerShown:false, }}/>

          {!isAuth && (
            <>
              <Stack.Screen name="login" component={Login} options={{ headerShown: false }}/>
              <Stack.Screen name="register" component={Register} options={{ headerShown: false }}/>
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

