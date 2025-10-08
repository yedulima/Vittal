import React from "react";

import { View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import Notification from "../../components/Notification";

import { style } from "./styles";

export default function Notifications() {
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
			<View style={{ width: "100%" }}>
				<Notification
					name="Alerta de SOS"
					description="Maria apertou botão SOS"
					status="SOS"
					data="Hoje - 19:47"
				/>
				<Notification
					name="Alerta de Medicamento"
					description="João não tomou os medicamentos"
					status="SOSs"
					data="Hoje - 12:10"
				/>
			</View>
		</ScrollView>
	);
}
