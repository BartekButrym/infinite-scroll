import { forwardRef } from 'react';
import { DerivedComponent } from './DerivedComponent';
import { ElementTypes } from '../interfaces/data';

export const Content = forwardRef<HTMLLIElement, ElementTypes>(({ element }, ref) => {
	const elementContent = <DerivedComponent element={element} />;

	const content = ref ? (
		<li className='space-y-1 py-4' ref={ref}>
			{elementContent}
		</li>
	) : (
		<li className='space-y-1 py-4'>{elementContent}</li>
	);

	return content;
});
