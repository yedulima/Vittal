import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		padding: 30,
	},
	boxTop: {
		width: "100%",
		height: Dimensions.get("window").height / 3.5,
		alignItems: "center",
		justifyContent: "center",
		gap: 20,
		// backgroundColor: "red",
	},
	infos: {
		width: "100%",
		height: "25%",
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: "blue",
	},
	nameText: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 22,
		height: "auto",
	},
	emailText: {
		textAlign: "center",
		fontWeight: "light",
		fontSize: 15,
		color: "#585858ff",
	},
	boxBottom: {
		width: "100%",
		height: Dimensions.get("window").height / 4,
		alignItems: "center",
		paddingVertical: 30,
		// backgroundColor: "#fff",
		gap: 20,
	},
});
