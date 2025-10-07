import React from "react";

import {
	TouchableOpacityProps,
	TouchableOpacity,
	ActivityIndicator,
	Text,
	StyleProp,
	ViewStyle,
	TextStyle,
	DimensionValue,
} from "react-native";

import { style } from "./styles";

type Props = TouchableOpacityProps & {
	text: string;
	loading?: boolean;
	buttonColor?: string;
	textColor?: string;
	width?: DimensionValue;
	height?: DimensionValue;
};

export function Button({
	text,
	loading,
	buttonColor,
	textColor,
	width,
	height,
	...rest
}: Props) {
	const buttonStyles: StyleProp<ViewStyle> = [
		style.button,
		buttonColor && { backgroundColor: buttonColor },
		width != null && { width: width },
		height != null && { height: height },
	];

	const textStyles: StyleProp<TextStyle> = [
		style.textButton,
		textColor && { color: textColor },
	];

	return (
		<TouchableOpacity style={buttonStyles} {...rest} activeOpacity={0.6}>
			{loading ? (
				<ActivityIndicator color={"#ffffff"} size={"small"} />
			) : (
				<Text style={textStyles}>{text}</Text>
			)}
		</TouchableOpacity>
	);
}
