import React from "react";
import "react-native-gesture-handler";

import { SafeAreaView } from "react-native";
import { StackNavigator } from "./src/routes/stack";

function App() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<StackNavigator />
		</SafeAreaView>
	);
}

export default App;
