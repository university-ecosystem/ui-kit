import React from 'react';
import { CardContent, CardFooter, CardHeader } from './components';
import { CardProps } from './interfaces';
import { StyledCardWrapper } from './styles';
import { Hoverable } from '../hoverable';

const CardComponent: React.FC<CardProps> = ({
	children,
}): React.ReactElement => {
	return (
		<Hoverable>
			<StyledCardWrapper>{children}</StyledCardWrapper>
		</Hoverable>
	);
};

export const Card = Object.assign(CardComponent, {
	CardHeader,
	CardContent,
	CardFooter,
});
