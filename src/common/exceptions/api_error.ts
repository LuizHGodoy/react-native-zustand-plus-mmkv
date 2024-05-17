export class ApiError {
	constructor(
		public readonly error_message: string,
		public readonly status_code: number,
	) {}
}

export function handleAxiosError(error: any): ApiError {
	const statusCode = error.response?.data.statusCode ?? 500;
	const message =
		error.response?.data.message ?? "Serviço indisponível no momento...";

	console.log("Api Error: ", JSON.stringify(error, null, 2));
	console.log({ statusCode, message });

	return new ApiError(message, statusCode);
}
