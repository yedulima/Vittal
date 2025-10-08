import React from "react";
import { MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

import { View, Text, TouchableOpacity, Image } from "react-native";

import { style } from "./styles";

interface NotificationProps {
	name: string;
	description: string;
	status: string;
	data: string;
}

export default function Notification({
	name,
	description,
	status,
	data,
}: NotificationProps) {
	return (
		<TouchableOpacity style={style.container}>
			<View style={style.boxLeft}>
				<View
					style={[
						style.notificationCircle,
						{
							backgroundColor:
								status === "Ativo"
									? "#4ece42ff"
									: status === "SOS"
									? "#e92c2cff"
									: "#f8b840ff",
							borderRadius: 50,
						},
					]}
				>
					{status === "SOS" ? (
						<MaterialIcons
							name="sos"
							style={{
								fontSize: 30,
								color: "#f79090ff",
							}}
						/>
					) : (
						<FontAwesome5
							name="capsules"
							style={{
								fontSize: 25,
								color: "#b98a11ff",
							}}
						/>
					)}
				</View>
			</View>
			<View style={style.boxMid}>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
						alignItems: "center",
					}}
				>
					<Text
						style={[
							style.nameText,
							{
								color:
									status === "Ativo"
										? "#4ece42ff"
										: status === "SOS"
										? "#e92c2cff"
										: "#f8b840ff",
							},
						]}
					>
						{name}
					</Text>
					<Text
						style={{
							marginRight: 10,
                            fontSize: 13,
							fontWeight: "light",
							color: "#777777ff",
						}}
					>
						{data}
					</Text>
				</View>
				<Text style={style.descriptionText}>{description}</Text>
			</View>
		</TouchableOpacity>
	);
}
