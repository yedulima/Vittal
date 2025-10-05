import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 30,
	},
	boxTop: {
		height: Dimensions.get("window").height/3,
		width: "100%",
        justifyContent: "center",
        alignItems: "center",
		gap: 12,
	},
	welcomeMessage: {
		fontWeight: "bold",
		fontSize: 35,
	},
	subWelcomeMessage: {
		fontWeight: "light",
		fontSize: 16,
	},
	boxMid: {
		height: Dimensions.get("window").height/3.5,
		width: "100%",
		paddingHorizontal: 25,
		gap: 5,
	},
	boxBottom: {
		height: Dimensions.get("window").height/4,
		width: "100%",
		alignItems: "center",
		paddingVertical: 35,
	},
});
