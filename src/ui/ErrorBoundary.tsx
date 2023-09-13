import { Button } from './Button';

export const Fallback = () => {
	const reload = () => window.location.reload();

	return (
		<div role='alert' className='h-full flex flex-col items-center justify-center'>
			<h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
				Something went wrong 💣
			</h1>
			<p className='mt-6 text-base leading-7 text-gray-600'>Please, hit the button below to start again.</p>
			<div className='mt-10'>
				<Button onClick={reload}>Try again 🎉</Button>
			</div>
		</div>
	);
};
