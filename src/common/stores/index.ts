import { MMKV } from "react-native-mmkv";
import { create } from "zustand";

export const mmkv = new MMKV();

type State = {
	userData: any;
	sign_out: () => void;
	clear_all: () => void;
	is_authenticated: boolean;
	authenticate: (userData: any) => void;
};

export const useStore = create<State>((set) => ({
	userData: mmkv.getString("userData")
		? JSON.parse(mmkv.getString("userData"))
		: null,
	is_authenticated: mmkv.getString("is_authenticated") === "true",
	authenticate: (userData: any) => {
		mmkv.set("userData", userData);
		mmkv.set("is_authenticated", "true");
		const parsedUserData = JSON.parse(userData);
		set({ is_authenticated: true, userData: parsedUserData });
	},
	sign_out: () => {
		mmkv.delete("userData");
		mmkv.set("is_authenticated", "false");
		set({ is_authenticated: false, userData: null });
	},
	clear_all: () => {
		mmkv.clearAll();
		set({
			is_authenticated: false,
			userData: null,
		});
	},
}));
