import { useEffect } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { v4 as uuidv4 } from 'uuid';
import { fetchData } from '../services/fetchData';
import { DataTypes } from '../interfaces/data';
import { LIMIT_PER_PAGE } from '../constants/common';
import { Content } from './Content';
import { Navbar } from '../ui/Navbar';
import { Loader } from '../ui/Loader';

export const InfiniteScroll = () => {
	const { ref, inView } = useInView();

	const { isLoading, isError, error, data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
		useInfiniteQuery<DataTypes[], Error>({
			queryKey: ['data'],
			queryFn: ({ pageParam = 1 }) => fetchData(pageParam),
			getNextPageParam: (lastPage, allPages) => {
				const nextPage = lastPage.length === LIMIT_PER_PAGE ? allPages.length + 1 : undefined;
				return nextPage;
			},
		});

	useEffect(() => {
		if (inView && hasNextPage) fetchNextPage();
	}, [inView, fetchNextPage, hasNextPage]);

	const content =
		isSuccess &&
		data?.pages.map((page) =>
			page.map((element, i) => {
				if (page.length >= 3 && page.length - 3 === i) {
					return <Content ref={ref} key={element.id || uuidv4()} element={element} />;
				}

				return <Content key={element.id || uuidv4()} element={element} />;
			})
		);

	if (isLoading) return <Loader />;

	if (isError) return <h2>{error.message}</h2>;

	return (
		<>
			<Navbar />
			<main className='grid min-h-full p-10'>
				<ul role='list' className='divide-y divide-stone-300'>
					{content}
				</ul>
				{isFetchingNextPage && <Loader />}
			</main>
		</>
	);
};
