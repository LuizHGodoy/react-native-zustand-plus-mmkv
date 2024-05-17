import type { ToastShowParams } from "react-native-toast-message";

export function error_toast(message: string): ToastShowParams {
	return {
		type: "error",
		position: "top",
		text1: "Erro",
		text2: message,
		visibilityTime: 3000,
		autoHide: true,
	};
}
