import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/home/Home";
import Contatcs from "../pages/contacts/Contatcs";
import Notifications from "../pages/notifications/Notifications";
import Configurations from "../pages/configurations/Configurations";

import CustomTabBar from "../components/CustomTabBar/CustomTabBar";

const Tab = createBottomTabNavigator();

const screenOptions = {
	headerShown: false,
	cardStyle: {
		backgroundColor: "#fff",
	},
};

export default function BottomRoutes() {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={screenOptions}
			tabBar={(props) => <CustomTabBar {...props} />}
		>
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="People" component={Contatcs} />
			<Tab.Screen name="Notifications" component={Notifications} />
			<Tab.Screen name="Configurations" component={Configurations} />
		</Tab.Navigator>
	);
}
