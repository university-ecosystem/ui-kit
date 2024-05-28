import React from 'react';

import error from './images/error.svg';

export const ErrorIllustration = ({
	width = '500px',
	height = '450px',
}: React.SVGProps<SVGSVGElement>) => {
	return (
		<>
			<img src={error} width={width} height={height} />
		</>
	);
};
