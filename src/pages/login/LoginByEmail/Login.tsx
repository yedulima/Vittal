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

export default function LoginByEmail() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const navigation = useNavigation<NavigationProp<any>>();

	async function handleLogin() {
		setLoading(true);
		try {
			if (!email || !password) {
				return Alert.alert(
					"Campos vazios!",
					"Certifique-se de preencher todos os campos para efetuar o login."
				);
			}

			await login(email, password);

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
					value={email}
					title="E-mail:"
					onChangeText={setEmail}
					IconRight={MaterialIcons}
					iconRightName="email"
				/>
				<Input
					value={password}
					title="Senha:"
					onChangeText={setPassword}
					IconRight={Octicons}
					iconRightName={showPassword ? "eye" : "eye-closed"}
					onIconRightPress={() => setShowPassword(!showPassword)}
					secureTextEntry={showPassword ? false : true}
				/>
				<View style={{ gap: 2 }}>
					<RedirectLink
						text="Realizar login com telefone"
						to="LoginByPhone"
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
