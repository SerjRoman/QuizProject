export const queryHeaders = (headers: Headers) => {
	const authToken = localStorage.getItem("authToken");
	const authHeader = authToken ? `Bearer ${authToken}` : "";
	headers.set("Authorization", authHeader);
	return headers;
};
