import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../pages/home";
import Contatcs from "../pages/contacts";
import Notifications from "../pages/notifications";
import Configurations from "../pages/configurations";

import CustomTabBar from "../components/CustomTabBar";

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
			<Tab.Screen
				name="Contacts"
				component={Contatcs}
				options={{
					headerShown: true,
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#fff",
						elevation: 0,
					},
					headerTitle: "Contatos",
				}}
			/>
			<Tab.Screen
				name="Notifications"
				component={Notifications}
				options={{
					headerShown: true,
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#fff",
						elevation: 0,
					},
					headerTitle: "Notificações",
				}}
			/>
			<Tab.Screen
				name="Configurations"
				component={Configurations}
				options={{
					headerShown: true,
					headerTitleAlign: "center",
					headerStyle: {
						backgroundColor: "#fff",
						elevation: 0,
					},
					headerTitle: "Configurações",
				}}
			/>
		</Tab.Navigator>
	);
}
