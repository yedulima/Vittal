import React, { useState } from "react";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

import { Text, View, Image, Alert } from "react-native";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import { RedirectLink } from "../../../components/RedirectLink";

import { useNavigation, NavigationProp } from "@react-navigation/native";

import { login } from "../../../services/Auth.service";

import { style } from "../styles";
import Logo from "../../../assets/Logo.png";

export default function LoginByPhone() {
	const [number, setNumber] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const navigation = useNavigation<NavigationProp<any>>();

	async function handleLogin() {
		setLoading(true);
		try {
			if (!number) {
				return Alert.alert(
					"Campos vazios!",
					"Certifique-se de preencher todos os campos para efetuar o login."
				);
			}

			// const user = await login(email, password);
			// console.log(user); // Lembrar de TIRAR

			navigation.reset({
				index: 0,
				routes: [{ name: "BottomRoutes" }],
			});
		} catch (err) {
			console.error(err);
			Alert.alert(
				"Login não bem sucedido!",
				"O login não pode ser efetuado."
			);
		} finally {
			setLoading(false);
		}
	}

	return (
		<View style={style.container}>
			<View style={style.boxTop}>
				<Image source={Logo} width={1000} height={1000} />
				<View
					style={{ justifyContent: "center", alignItems: "center" }}
				>
					<Text style={style.welcomeMessage}>
						Bem vindo de volta!
					</Text>
					<Text style={style.subWelcomeMessage}>
						Realize o login para entrar no sistema.
					</Text>
				</View>
			</View>
			<View style={style.boxMid}>
				<Input
					value={number}
					title="Telefone:"
					onChangeText={setNumber}
					IconRight={MaterialIcons}
					iconRightName="local-phone"
				/>
				<View style={{ gap: 2 }}>
					<RedirectLink
						text="Realizar login com e-mail"
						to="LoginByEmail"
					/>
					<RedirectLink
						text="Esqueci minha senha"
						to="esqueciSenha"
					/>
				</View>
			</View>
			<View style={style.boxBottom}>
				<Button text="Entrar" loading={loading} onPress={handleLogin} />
			</View>
			<Text>
				Não possui uma conta?{" "}
				<Text style={{ color: "#3ABBBF" }}>Crie uma agora!</Text>
			</Text>
		</View>
	);
}
