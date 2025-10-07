import React, { useState } from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { IdosoForm, CuidadorForm } from "./Forms";
import { RedirectLink } from "../../components/RedirectLink";

import { style } from "./styles";

type UserType = "idoso" | "cuidador";

interface UserTypeSelectorProps {
	userType: UserType;
	setUserType: React.Dispatch<React.SetStateAction<UserType>>;
}

const UserTypeSelector = ({ userType, setUserType }: UserTypeSelectorProps) => {
	return (
		<View style={style.userSelector}>
			<TouchableOpacity
				style={[
					style.selectorButton,
					userType === "idoso" && style.selectorActive,
				]}
				onPress={() => setUserType("idoso")}
			>
				<Text
					style={[
						style.selectorText,
						userType === "idoso"
							? style.textActive
							: style.textInactive,
					]}
				>
					Idoso
				</Text>
			</TouchableOpacity>

			<TouchableOpacity
				style={[
					style.selectorButton,
					userType === "cuidador" && style.selectorActive,
				]}
				onPress={() => setUserType("cuidador")}
			>
				<Text
					style={[
						style.selectorText,
						userType === "cuidador"
							? style.textActive
							: style.textInactive,
					]}
				>
					Cuidador
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default function Register() {
	const [userType, setUserType] = useState<UserType>("idoso");

	const renderForm = () => {
		if (userType === "idoso") {
			return <IdosoForm />;
		}
		return <CuidadorForm />;
	};

	return (
		<ScrollView style={style.container}>
			<View style={style.boxTop}>
				<UserTypeSelector
					userType={userType}
					setUserType={setUserType}
				/>
			</View>
			{renderForm()}
			<View style={{ width: "100%", alignItems: "center" }}>
				<RedirectLink text="Já tem uma conta? Faça login!" to="Login" />
			</View>
		</ScrollView>
	);
}
