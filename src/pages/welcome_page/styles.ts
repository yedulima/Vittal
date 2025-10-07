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
		height: Dimensions.get("window").height / 2.5,
		justifyContent: "flex-end",
		alignItems: "center",
		gap: 25,
		// backgroundColor: "red",
	},
	title: {
		fontSize: 35,
		fontWeight: "bold",
		textAlign: "center",
	},
	subTitle: {
		fontSize: 17,
		fontWeight: "medium",
		textAlign: "center",
	},
	boxMid: {
		width: "100%",
		height: Dimensions.get("window").height / 3.2,
		justifyContent: "center",
		alignItems: "center",
		gap: 15,
		// backgroundColor: "green",
	},
	boxBottom: {
		width: "100%",
		height: Dimensions.get("window").height / 5,
		alignItems: "center",
		justifyContent: "flex-end",
		// backgroundColor: "blue",
	},
});
