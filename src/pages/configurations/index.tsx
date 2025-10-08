import React, { useState, useEffect } from "react";

import { Button } from "../../components/Button";

import { FIREBASE_AUTH, FIRESTORE_DB } from "../../../FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";

import { View, Text, ActivityIndicator, Image } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { style } from "./styles";

async function getUserName() {
	const user = FIREBASE_AUTH.currentUser;

	if (user) {
		try {
			const userDocRef = doc(FIRESTORE_DB, "users", user.uid);
			const userDocSnap = await getDoc(userDocRef);

			if (userDocSnap.exists()) {
				const userData = userDocSnap.data();

				return userData.name;
			}
		} catch (err: any) {
			console.error(err);
			return null;
		}
	} else {
		return null;
	}
}

export default function Configurations() {
	const [name, setName] = useState<string | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	const navigation = useNavigation<NavigationProp<any>>();

	const imageWidth = 140;
	const imageHeight = 140;

	const placeHolder = `https://placecats.com/${imageWidth}/${imageHeight}`;

	useEffect(() => {
		async function getDisplayName() {
			setLoading(true);
			try {
				const name = await getUserName();
				if (name) {
					setName(name);
				} else {
					setName("User not found!");
				}
			} catch (err: any) {
				console.error(err);
			} finally {
				setLoading(false);
			}
		}
		getDisplayName();
	}, []);

	return (
		<View style={style.container}>
			<View style={style.boxTop}>
				<Image
					source={{
						uri: placeHolder,
					}}
					style={{
						width: imageWidth,
						height: imageHeight,
						borderRadius: 70,
					}}
				/>
				<View style={style.infos}>
					{loading ? (
						<ActivityIndicator color={"#000000ff"} size={"small"} />
					) : (
						<View>
							<Text style={style.nameText}>
								{name}
							</Text>
							<Text style={style.emailText}>
								{FIREBASE_AUTH.currentUser?.email}
							</Text>
						</View>
					)}
				</View>
			</View>
			<View style={style.boxBottom}>
				<Button text="Minha conta" />
				<Button
					text="Sair da conta"
					buttonColor="#fff"
					borderColor="#38E07B"
					borderWidth={2}
					textColor="#000"
					onPress={() => {
						FIREBASE_AUTH.signOut();
						navigation.reset({
							index: 0,
							routes: [{ name: "WelcomePageRoutes" }],
						});
					}}
				/>
			</View>
		</View>
	);
}
