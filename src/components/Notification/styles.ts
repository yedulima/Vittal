import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		height: "auto",
		flexDirection: "row",
		backgroundColor: "#fff",
		borderRadius: 10,

		margin: 5,
		paddingHorizontal: 10,

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
		width: "20%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	notificationCircle: {
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		
	},
	boxMid: {
		width: "80%",
		height: "100%",
		justifyContent: "center",
	},
	nameText: {
		fontSize: 19,
		fontWeight: "bold",
		color: "#494949ff",
	},
	descriptionText: {
		fontSize: 15,
		fontWeight: "medium",
		color: "#494949ff",
	},
});
