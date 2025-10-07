import React from "react";

import { Button } from "../../components/Button";

import { View, Text, Image } from "react-native";
import Logo from "../../assets/Logo.png";

import { useNavigation, NavigationProp } from "@react-navigation/native";

import { style } from "./styles";

export default function WelcomePage() {
	const navigation = useNavigation<NavigationProp<any>>();

	return (
		<View style={style.container}>
			<View style={style.boxTop}>
				<Image source={Logo} width={1000} height={1000} />
				<View style={{ alignItems: "center" }}>
					<Text style={style.title}>Bem vindo ao Vittal!</Text>
					<Text style={style.subTitle}>
						Cuide de quem você mais ama
					</Text>
				</View>
			</View>
			<View style={style.boxMid}>
				<Button
					text="Login"
					buttonColor="#38E07B"
					textColor="#000"
					width={310}
					onPress={() => navigation.navigate("Login")}
				/>
				<Button
					text="Cadastre-se"
					buttonColor="#CFF3DE"
					textColor="#000"
					width={310}
					onPress={() => console.log("Hell World!")}
				/>
			</View>
			<View style={style.boxBottom}>
				<Text style={{ color: "#AAAEB5", textAlign: "center" }}>
					Ao continuar, você concorda com nossos{" "}
					<Text style={{ color: "#5EE594" }}>Termos de Serviço</Text>{" "}
					e{" "}
					<Text style={{ color: "#5EE594" }}>
						Políticas de Privacidade
					</Text>
					.
				</Text>
			</View>
		</View>
	);
}
