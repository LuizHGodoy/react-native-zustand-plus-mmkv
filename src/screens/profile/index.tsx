import React from "react";
import { StyleSheet, Text, View } from "react-native";

export function Profile() {
	return (
		<View style={styles.container}>
			<Text style={styles.paragraph}>Welcome to Profile!</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	paragraph: {
		margin: 24,
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center",
	},
});
