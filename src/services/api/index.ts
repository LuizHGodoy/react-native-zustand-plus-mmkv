import { API_URL } from "@env";
import { mmkv } from "@stores";
import axios from "axios";

export const api = axios.create({
	baseURL: API_URL,
});

api.interceptors.response.use(
	(response) => {
		if (response.data.access_token) {
			mmkv.set("access_token", response.data.access_token);
		}

		return response;
	},
	(error) => {
		return Promise.reject(error);
	},
);

api.interceptors.request.use(
	(config) => {
		const access_token = mmkv.getString("access_token");

		if (access_token) {
			config.headers.Authorization = `Bearer ${access_token}`;
		}

		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);
