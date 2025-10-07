import React, { useState } from "react";
import { Octicons } from "@expo/vector-icons";

import { View, Alert, Dimensions } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { useNavigation, NavigationProp } from "@react-navigation/native";

import { signUp } from "../../services/Auth.service";

import { style } from "./styles";

export function IdosoForm() {
	const [name, setNome] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [passwordConfirmation, setPasswordConfirmation] =
		useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showPasswordConfirmation, setShowPasswordConfirmation] =
		useState<boolean>(false);
	const [age, setAge] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");

	const [loading, setLoading] = useState<boolean>(false);

	const navigation = useNavigation<NavigationProp<any>>();

	async function handleRegister() {
		setLoading(true);
		try {
			if (!name || !email || !password || !phoneNumber || !age) {
				return Alert.alert(
					"Campos vazios!",
					"Preencha todos os campos para efetuar o cadastro."
				);
			}

			if (password !== passwordConfirmation) {
				return Alert.alert(
					"Confirmação de senha incorreta!",
					"Incoerência nas senhas."
				);
			}

			await signUp(email, password, name, phoneNumber, "idoso", age);
			navigation.reset({
				index: 0,
				routes: [{ name: "BottomRoutes" }],
			});
		} catch (err: any) {
			const errorCode = err.code;

			switch (errorCode) {
				case "auth/email-already-in-use":
					Alert.alert(
						"E-mail já está em uso!",
						"O e-mail inserido já está em uso."
					);
					break;
				case "auth/invalid-email":
					Alert.alert(
						"E-mail inválido!",
						"O e-mail inserido é inválido."
					);
					break;
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<View>
			<View
				style={[
					style.boxMid,
					{ height: Dimensions.get("window").height / 1.7 },
				]}
			>
				<View>
					<Input
						value={name}
						onChangeText={setNome}
						title="Nome"
						placeholder="Nome completo"
					/>
					<Input
						value={email}
						onChangeText={setEmail}
						title="E-mail"
						placeholder="exemplo@vittal.com"
					/>
					<Input
						value={password}
						onChangeText={setPassword}
						title="Senha"
						placeholder="Crie uma senha"
						IconRight={Octicons}
						iconRightName={showPassword ? "eye" : "eye-closed"}
						onIconRightPress={() => setShowPassword(!showPassword)}
						secureTextEntry={showPassword ? false : true}
					/>
					<Input
						value={passwordConfirmation}
						onChangeText={setPasswordConfirmation}
						title="Confirme sua senha"
						placeholder="Insira a sua senha novamente"
						IconRight={Octicons}
						iconRightName={
							showPasswordConfirmation ? "eye" : "eye-closed"
						}
						onIconRightPress={() =>
							setShowPasswordConfirmation(
								!showPasswordConfirmation
							)
						}
						secureTextEntry={
							showPasswordConfirmation ? false : true
						}
					/>
					<Input
						value={age}
						onChangeText={setAge}
						title="Idade"
						placeholder="Insira sua idade"
					/>
					<Input
						value={phoneNumber}
						onChangeText={setPhoneNumber}
						title="Telefone"
						placeholder="(00) 00000-0000"
					/>
				</View>
			</View>
			<View style={style.boxBottom}>
				<Button
					text="Cadastrar"
					loading={loading}
					width={"80%"}
					height={50}
					onPress={handleRegister}
				/>
			</View>
		</View>
	);
}

export function CuidadorForm() {
	const [name, setNome] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [passwordConfirmation, setPasswordConfirmation] =
		useState<string>("");
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showPasswordConfirmation, setShowPasswordConfirmation] =
		useState<boolean>(false);
	const [phoneNumber, setPhoneNumber] = useState<string>("");

	const [loading, setLoading] = useState<boolean>(false);

	const navigation = useNavigation<NavigationProp<any>>();

	async function handleRegister() {
		setLoading(true);
		try {
			if (!name || !email || !password || !phoneNumber) {
				return Alert.alert(
					"Campos vazios!",
					"Preencha todos os campos para efetuar o cadastro."
				);
			}
			if (password !== passwordConfirmation) {
				return Alert.alert(
					"Confirmação de senha incorreta!",
					"Incoerência nas senhas."
				);
			}

			await signUp(email, password, name, phoneNumber, "cuidador");
			navigation.reset({
				index: 0,
				routes: [{ name: "BottomRoutes" }],
			});
		} catch (err: any) {
			const errorCode = err.code;

			switch (errorCode) {
				case "auth/email-already-in-use":
					Alert.alert(
						"E-mail já está em uso!",
						"O e-mail inserido já está em uso."
					);
					break;
				case "auth/invalid-email":
					Alert.alert(
						"E-mail inválido!",
						"O e-mail inserido é inválido."
					);
					break;
			}
		} finally {
			setLoading(false);
		}
	}

	return (
		<View>
			<View
				style={[
					style.boxMid,
					{ height: Dimensions.get("window").height / 2 },
				]}
			>
				<View>
					<Input
						value={name}
						onChangeText={setNome}
						title="Nome"
						placeholder="Nome completo"
					/>
					<Input
						value={email}
						onChangeText={setEmail}
						title="E-mail"
						placeholder="exemplo@vittal.com"
					/>
					<Input
						value={password}
						onChangeText={setPassword}
						title="Senha"
						placeholder="Crie uma senha"
						IconRight={Octicons}
						iconRightName={showPassword ? "eye" : "eye-closed"}
						onIconRightPress={() => setShowPassword(!showPassword)}
						secureTextEntry={showPassword ? false : true}
					/>
					<Input
						value={passwordConfirmation}
						onChangeText={setPasswordConfirmation}
						title="Confirme sua senha"
						placeholder="Insira a sua senha novamente"
						IconRight={Octicons}
						iconRightName={
							showPasswordConfirmation ? "eye" : "eye-closed"
						}
						onIconRightPress={() =>
							setShowPasswordConfirmation(
								!showPasswordConfirmation
							)
						}
						secureTextEntry={
							showPasswordConfirmation ? false : true
						}
					/>
					<Input
						value={phoneNumber}
						onChangeText={setPhoneNumber}
						title="Telefone"
						placeholder="(00) 00000-0000"
					/>
				</View>
			</View>
			<View style={style.boxBottom}>
				<Button
					text="Cadastrar"
					loading={loading}
					width={"80%"}
					height={50}
					onPress={handleRegister}
				/>
			</View>
		</View>
	);
}
