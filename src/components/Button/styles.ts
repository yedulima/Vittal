import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
	button: {
		width: 250,
		height: 40,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#4ED347",
		borderRadius: 25,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 8,
		},
		shadowOpacity: 0.44,
		shadowRadius: 10.32,

		elevation: 16,
	},
	textButton: {
		color: "#ffffff",
		fontWeight: "bold",
		fontSize: 17,
	},
});
