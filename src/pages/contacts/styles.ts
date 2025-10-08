import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		padding: 30,
	},
	searchBar: {
		width: "100%",
		height: 50,
		flexDirection: "row",
		alignItems: "center",
		margin: 2,
		backgroundColor: "transparent",
		borderBottomColor: themes.colors.darkGray,
		borderBottomWidth: 1,
		gap: 7,
	},
	searchInput: {
		flex: 1,
		fontSize: 17,
		color: "#7c7c7cff"
	},
	addButton: {
		width: 65,
		height: 65,
		position: "absolute",
		right: 0,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 40,
		backgroundColor: "#38E07B",
	},
});
