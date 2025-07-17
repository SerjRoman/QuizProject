export const queryHeaders = (headers: Headers) => {
	const authToken = localStorage.getItem("token");
	const authHeader = authToken ? `Bearer ${authToken}` : "";
	headers.set("Authorization", authHeader);
	headers.set("ngrok-skip-browser-warning", "true");
	return headers;
};
