import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
	tabArea: {
		height: 70,
		flexDirection: "row",
		justifyContent: "space-around",
		paddingHorizontal: 10,
		alignItems: "center",

		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.39,
		shadowRadius: 8.3,

		elevation: 13,
	},
	tabItem: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
