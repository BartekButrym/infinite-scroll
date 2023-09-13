export const LIMIT_PER_PAGE = 10;

export const getUrl = (page: number) =>
	`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${LIMIT_PER_PAGE}`;
