import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/login/Login";

const Stack = createStackNavigator();

const screenOptions = {
	headerShown: false,
	cardStyle: {
		backgroundColor: "#fff",
	},
};

export default function LoginRoutes() {
	return (
		<Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
			<Stack.Screen
				name="Login"
				component={Login}
				options={{
					headerShown: true,
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "transparent",
						elevation: 0,
						shadowOpacity: 0,
					},
				}}
			/>
		</Stack.Navigator>
	);
}
