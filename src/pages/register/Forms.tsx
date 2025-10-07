import React, { useState } from "react";

import { View, Text, Alert, Dimensions } from "react-native";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { style } from "./styles";

export function IdosoForm() {
	const [name, setNome] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [passwordConfirmation, setPasswordConfirmation] =
		useState<string>("");
	const [age, setAge] = useState<string>("");
	const [phoneNumber, setPhoneNumber] = useState<string>("");

	const [loading, setLoading] = useState<boolean>(false);

	async function handleRegister() {
		setLoading(true);
		try {
			if (!name || !email || !password || !phoneNumber || !age) {
				return Alert.alert(
					"Campos vazios!",
					"Preencha todos os campos para efetuar o cadastro."
				);
			}
			console.log("Registrado!");
		} catch (err) {
			console.error(err);
			Alert.alert(
				"Cadastro não bem sucedido!",
				"O cadastro não pode ser efetuado."
			);
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
					/>
					<Input
						value={passwordConfirmation}
						onChangeText={setPasswordConfirmation}
						title="Confirme sua senha"
						placeholder="Insira a sua senha novamente"
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
	const [phoneNumber, setPhoneNumber] = useState<string>("");

	const [loading, setLoading] = useState<boolean>(false);

	async function handleRegister() {
		setLoading(true);
		try {
			if (!name || !email || !password || !phoneNumber) {
				return Alert.alert(
					"Campos vazios!",
					"Preencha todos os campos para efetuar o cadastro."
				);
			}
			console.log("Registrado!");
		} catch (err) {
			console.error(err);
			Alert.alert(
				"Cadastro não bem sucedido!",
				"O cadastro não pode ser efetuado."
			);
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
					/>
					<Input
						value={passwordConfirmation}
						onChangeText={setPasswordConfirmation}
						title="Confirme sua senha"
						placeholder="Insira a sua senha novamente"
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
