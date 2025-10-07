import React from "react";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

import { View, Text, TouchableOpacity } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { style } from "./styles";

export default function CustomTabBar({ state, navigation }: BottomTabBarProps) {
	const navigateTo = (screenName: string) => {
		navigation.navigate(screenName);
	};

	return (
		<View style={style.tabArea}>
			<TouchableOpacity
				style={style.tabItem}
				onPress={() => navigateTo("Home")}
			>
				<Octicons
					name="home"
					style={{
						fontSize: 25,
						color: state.index === 0 ? "#38E07B" : "#000",
					}}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={style.tabItem}
				onPress={() => navigateTo("People")}
			>
				<Octicons
					name="people"
					style={{
						fontSize: 25,
						color: state.index === 1 ? "#38E07B" : "#000",
					}}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={style.tabItem}
				onPress={() => navigateTo("Notifications")}
			>
				<MaterialIcons
					name="notifications-none"
					style={{
						fontSize: 30,
						color: state.index === 2 ? "#38E07B" : "#000",
					}}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={style.tabItem}
				onPress={() => navigateTo("Configurations")}
			>
				<Octicons
					name="gear"
					style={{
						fontSize: 25,
						color: state.index === 3 ? "#38E07B" : "#000",
					}}
				/>
			</TouchableOpacity>
		</View>
	);
}
