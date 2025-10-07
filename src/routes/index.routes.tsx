import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import AuthLoading from "../pages/auth/AuthLoading";
import WelcomePage from "../pages/welcome_page";
import Login from "../pages/login";
import BottomRoutes from "./bottom.routes";
import WecomePageRoutes from "./welcome_page.routes";

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
				name="WelcomePageRoutes"
				component={WecomePageRoutes}
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
				name="BottomRoutes"
				component={BottomRoutes}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
