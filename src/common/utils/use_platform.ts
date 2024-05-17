import { Platform } from "react-native";

export function use_platform<T>(android: T, ios: T): T {
	if (Platform.OS === "android") return android;

	return ios;
}
