import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { View, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Contact from "../../components/Contact";

import { style } from "./styles";

export default function Contatcs() {
	const insets = useSafeAreaInsets();

	return (
		<ScrollView
			style={style.container}
			contentContainerStyle={{
				alignItems: "center",
				paddingBottom: insets.bottom + 20,
				gap: 15,
			}}
		>
			<View style={style.searchBar}>
				<TextInput
					style={style.searchInput}
					placeholder="Pesquisar contato"
				/>
				<MaterialIcons
					name="search"
					style={{
						fontSize: 20,
						color: "#7c7c7cff",
					}}
				/>
			</View>
			<View style={{ width: "100%" }}>
				<Contact name={"Eduardo"} status={"Ativo"} />
				<Contact name={"Levi"} status={"SOS"} />
				<Contact name={"Júlio"} status={"Ativo"} />
				<Contact name={"Kairo"} status={"Pendente"} />
				<Contact name={"Raphael"} status={"Ativo"} />
				<Contact name={"Vitor"} status={"SOS"} />
			</View>
			<TouchableOpacity
				style={[style.addButton, { bottom: insets.bottom - 110 }]}
			>
				<MaterialIcons
					name="add"
					style={{ fontSize: 30, color: "#fff" }}
				/>
			</TouchableOpacity>
		</ScrollView>
	);
}
