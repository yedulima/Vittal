import React from "react";
import { MaterialIcons } from "@expo/vector-icons";

import { View, Text, TouchableOpacity, Image } from "react-native";

import { style } from "./styles";

interface ContactProps {
	name: string;
	status: string;
}

export default function Contact({ name, status }: ContactProps) {
	const imageWidth = 60;
	const imageHeight = 60;

	const placeHolder = `https://placecats.com/${imageWidth}/${imageHeight}`;

	return (
		<TouchableOpacity style={style.container}>
			<View style={style.boxLeft}>
				<Image
					source={{
						uri: placeHolder,
					}}
					style={{
						width: imageWidth,
						height: imageHeight,
						borderRadius: 50,
						borderColor:
							status === "Ativo"
								? "#4ece42ff"
								: status === "SOS"
								? "#962929ff"
								: "#f8b840ff",
						borderWidth: 4,
					}}
				/>
			</View>
			<View style={style.boxMid}>
				<Text style={style.nameText}>{name}</Text>
				<Text
					style={[
						style.statusText,
						{
							color:
								status === "Ativo"
									? "#4ece42ff"
									: status === "SOS"
									? "#962929ff"
									: "#f8b840ff",
						},
					]}
				>
					{status}
				</Text>
			</View>
			<View style={style.boxRight}>
				<MaterialIcons
					name={"arrow-forward-ios"}
					style={{ fontSize: 17, color: "#c9c9c9ff" }}
				/>
			</View>
		</TouchableOpacity>
	);
}
