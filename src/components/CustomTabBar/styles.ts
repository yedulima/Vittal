import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
	tabArea: {
		height: 100,
		flexDirection: "row",
		justifyContent: "space-around",
		paddingHorizontal: 10,
		paddingBottom: 30,

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
