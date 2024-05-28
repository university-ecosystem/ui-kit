import React from 'react';

import noData from './images/no-data.svg';

export const EmptyIllustration = ({
	width = '500px',
	height = '450px',
}: React.SVGProps<SVGSVGElement>) => {
	return <img src={noData} width={width} height={height} />;
};
