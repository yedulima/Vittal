import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthLoading from "../pages/auth/AuthLoading";
import BottomRoutes from "./bottom.routes";
import LoginRoutes from "./login.routes";

const Stack = createStackNavigator();

const screenOptions = {
	headerShown: false,
	cardStyle: {
		backgroundColor: "#fff",
	},
};

export default function Routes() {
	return (
		<Stack.Navigator
			initialRouteName="AuthLoading"
			screenOptions={screenOptions}
		>
			<Stack.Screen
				name="AuthLoading"
				component={AuthLoading}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="LoginRoutes"
				component={LoginRoutes}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="BottomRoutes"
				component={BottomRoutes}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
