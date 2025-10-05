import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../pages/home/Home";

const Tab = createBottomTabNavigator();

const screenOptions = {
	headerShown: false,
	cardStyle: {
		backgroundColor: "#fff",
	},
};

export default function BottomRoutes() {
	return (
		<Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
			<Tab.Screen name="Home" component={Home} />
		</Tab.Navigator>
	);
}
