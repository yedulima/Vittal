import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { FIREBASE_AUTH } from "../../../FirebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function AuthLoading() {
	const navigation = useNavigation<NavigationProp<any>>();

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
			if (user) {
				return navigation.reset({
					index: 0,
					routes: [{ name: "BottomRoutes" }],
				});
			}

			navigation.reset({
				index: 0,
				routes: [{ name: "WelcomePageRoutes" }],
			});
		});
		return unsubscribe;
	}, [navigation]);

	return (
		<View
			style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
		>
			<ActivityIndicator size="large" color="#00BFFF" />
		</View>
	);
}
