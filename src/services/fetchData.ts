import { getUrl } from '../constants/common';

export const fetchData = async (page: number) => {
	const url = getUrl(page);
	const response = await fetch(url);

	return response.json();
};
