import React from 'react';
import { PageContentWrapper } from './styles';

export const PageContent: React.FC<{
	children?: React.ReactElement | React.ReactNode;
}> = ({ children }) => {
	return <PageContentWrapper>{children}</PageContentWrapper>;
};
