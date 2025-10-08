import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
	InputLabel: {
		marginTop: 15,
		fontSize: 16,
		fontWeight: "medium",
		color: "#4e4e4eff",
	},
	BoxInput: {
		width: "100%",
		marginTop: 5,
		height: 40,
		borderWidth: 1,
		borderRadius: 8,
		paddingHorizontal: 8,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: themes.colors.lightGray,
		borderColor: themes.colors.darkGray,
	},
	input: {
		width: "90%",
		height: "100%",
		borderRadius: 15,
		color: "#7c7c7cff",
	},
	Icon: {
		width: "100%",
	},
});
