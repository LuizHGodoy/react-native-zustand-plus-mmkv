import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export function Home(props: any) {
	return (
		<View style={styles.container}>
			<Text style={styles.paragraph}>Welcome to Home!</Text>
			<Button
				title="Go to Profile"
				onPress={() => props.navigation.navigate("Profile")}
			/>
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
