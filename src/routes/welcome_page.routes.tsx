import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomePage from "../pages/welcome_page";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

const Stack = createStackNavigator();

const screenOptions = {
	headerShown: false,
	cardStyle: {
		backgroundColor: "#fff",
	},
};

export default function WecomePageRoutes() {
	return (
		<Stack.Navigator
			initialRouteName="WelcomePage"
			screenOptions={screenOptions}
		>
			<Stack.Screen
				name="WelcomePage"
				component={WelcomePage}
				options={{ headerShown: false }}
			/>
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
			<Stack.Screen
				name="Register"
				component={Register}
				options={{
					headerShown: true,
					headerTitle: "Cadastro",
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
