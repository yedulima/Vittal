import React from "react";

import { TouchableOpacityProps, TouchableOpacity, Text } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";

import { style } from "./styles";

type Props = TouchableOpacityProps & {
	text: string;
	to: string;
};

export function RedirectLink({ text, to, ...rest }: Props) {
	const navigation = useNavigation<NavigationProp<any>>();

	return (
		<TouchableOpacity
			onPress={() => navigation.navigate(to)}
			{...rest}
			activeOpacity={0.5}
		>
			<Text style={style.textLink}>{text}</Text>
		</TouchableOpacity>
	);
}
