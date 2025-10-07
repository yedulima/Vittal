import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
	button: {
		width: 260,
		height: 55,
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#38E07B",
		borderRadius: 10,
		// shadowColor: "#000",
		// shadowOffset: {
		// 	width: 0,
		// 	height: 8,
		// },
		// shadowOpacity: 0.44,
		// shadowRadius: 10.32,

		// elevation: 16,
	},
	textButton: {
		color: "#fff",
		fontWeight: "bold",
		fontSize: 17,
	},
});
