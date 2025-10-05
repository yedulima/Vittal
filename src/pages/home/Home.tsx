import React from "react";
import { View, Text, Button } from "react-native";

import { style } from "./styles";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";

import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Home() {
	const navigation = useNavigation<NavigationProp<any>>();

	return (
		<View style={style.container}>
			<Text>Home!</Text>
			<Button
				onPress={() => {
					FIREBASE_AUTH.signOut();
					navigation.reset({
						index: 0,
						routes: [{ name: "LoginRoutes" }],
					});
				}}
				title="Logout"
			/>
		</View>
	);
}
