import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 30,
	},
	boxTop: {
		width: "100%",
		height: Dimensions.get("window").height / 5,
		justifyContent: "center",
		alignItems: "center",
		gap: 12,
		// backgroundColor: "green",
	},
	welcomeMessage: {
		fontWeight: "bold",
		fontSize: 35,
	},
	boxMid: {
		width: "100%",
		height: Dimensions.get("window").height / 4,
		paddingHorizontal: 25,
		gap: 5,
		// backgroundColor: "red",
	},
	boxBottom: {
		width: "100%",
		height: Dimensions.get("window").height / 3.2,
		alignItems: "center",
		paddingVertical: 15,
		paddingHorizontal: 25,
		gap: 15,
		// backgroundColor: "blue",
	},
});
