import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
	InputLabel: {
		marginTop: 15,
		fontSize: 16,
		color: "#4e4e4eff",
	},
	BoxInput: {
		width: "100%",
		marginTop: 5,
		height: 40,
		borderWidth: 1,
		borderRadius: 15,
		paddingHorizontal: 8,
		flexDirection: "row",
		alignItems: "center",
		backgroundColor: themes.colors.lightGray,
		borderColor: themes.colors.lightGray,
	},
	input: {
		width: "90%",
		height: "100%",
		borderRadius: 15,
	},
	Icon: {
		width: "100%",
	},
});
