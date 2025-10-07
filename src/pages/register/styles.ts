import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
	},
	boxTop: {
		width: "100%",
		height: Dimensions.get("window").height / 17,
		alignItems: "center",
		justifyContent: "center",
		// backgroundColor: "blue",
	},
	userSelector: {
		flexDirection: "row",
		width: "100%",
		height: "100%",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#E5E7EB",
		borderRadius: 10,
		padding: 5,
		gap: 10,
	},
	selectorButton: {
		height: "100%",
		width: "48%",
		borderRadius: 10,
		justifyContent: "center",
		backgroundColor: "transparent",
	},
	selectorActive: {
		backgroundColor: "#39E079",
	},
	selectorText: {
		fontWeight: "bold",
		fontSize: 18,
		textAlign: "center",
	},
	textActive: {
		color: "#fff",
	},
	textInactive: {
		color: "#5A626D",
	},
    boxMid: {
        width: "100%",
        gap: 35,
        // backgroundColor: "red",
    },
	boxBottom: {
        alignItems: "center",
        paddingVertical: 25,
		// backgroundColor: "blue",
	},
});
