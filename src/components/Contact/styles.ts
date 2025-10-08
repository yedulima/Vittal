import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: 75,
		flexDirection: "row",
		backgroundColor: "#fff",
		borderRadius: 10,

		margin: 5,

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 1,
		},
		shadowOpacity: 0.2,
		shadowRadius: 1.41,

		elevation: 2,
	},
	boxLeft: {
		width: "30%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	boxMid: {
		width: "60%",
		height: "100%",
		justifyContent: "center",
	},
	nameText: {
		fontSize: 17,
		fontWeight: "bold",
		color: "#494949ff",
	},
	statusText: {
		fontSize: 15,
		fontWeight: "medium",
	},
	boxRight: {
		width: "10%",
		height: "100%",
		justifyContent: "center",
	},
});
