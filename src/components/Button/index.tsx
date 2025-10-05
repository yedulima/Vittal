import React from "react";

import {
	TouchableOpacityProps,
	TouchableOpacity,
	ActivityIndicator,
	Text,
} from "react-native";

import { style } from "./styles";

type Props = TouchableOpacityProps & {
	text: string;
	loading?: boolean;
};

export function Button({ ...rest }: Props) {
	return (
		<TouchableOpacity style={style.button} {...rest} activeOpacity={0.6}>
			{rest.loading ? (
				<ActivityIndicator color={"#ffffff"} size={"small"} />
			) : (
				<Text style={style.textButton}>{rest.text}</Text>
			)}
		</TouchableOpacity>
	);
}
