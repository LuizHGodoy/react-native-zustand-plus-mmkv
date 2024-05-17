import { handleAxiosError, type ApiError } from "@exceptions/api_error";
import { api } from "@services/api";
import { mmkv } from "@stores";

export async function signIn(
	email: string,
	password: string,
): Promise<any | ApiError> {
	try {
		const response = await api.post("/authentication/sign-in", {
			email,
			password,
		});

		if (response.data.access_token) {
			mmkv.set("access_token", response.data.access_token);
		}

		return response.data;
	} catch (error) {
		return handleAxiosError(error);
	}
}
