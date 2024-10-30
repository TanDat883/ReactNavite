import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { store } from './store'; // Import the store

import Screen01 from "./screens/Screen01";
import Screen02 from "./screens/Screen02";
import Screen03 from "./screens/Screen03";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Screen01" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Screen01" component={Screen01} />
          <Stack.Screen name="Screen02" component={Screen02} />
          <Stack.Screen name="Screen03" component={Screen03} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}