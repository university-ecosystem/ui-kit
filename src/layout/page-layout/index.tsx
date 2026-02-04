import React from 'react';
import { PageLayoutWrapper } from './styles';
import { PageContent as Content, PageHeader as Header } from './components';

const PageLayoutComponent: React.FC<{
	children: React.ReactElement | React.ReactNode;
}> = ({ children }): React.ReactElement => {
	return <PageLayoutWrapper>{children}</PageLayoutWrapper>;
};

export const PageLayout = Object.assign(PageLayoutComponent, {
	Header,
	Content,
});
