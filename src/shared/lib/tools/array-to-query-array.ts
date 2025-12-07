export function arrayToQueryArray(array: string[], queryParam: string) {
	if (array.length === 0) {
		return "";
	}
	return `&${queryParam}=${array.join(`&${queryParam}=`)}`;
}
