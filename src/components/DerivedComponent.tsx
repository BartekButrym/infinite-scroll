import { ElementTypes } from '../interfaces/data';

export const DerivedComponent = ({ element }: ElementTypes) => {
	return (
		<div className='flex items-center gap-x-6'>
			<img src={element.url} alt={element.title} className='h-40 w-40' />
			<h2 className='font-semibold leading-6 text-gray-900'>{element.title}</h2>
		</div>
	);
};
