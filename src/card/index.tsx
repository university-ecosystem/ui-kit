import React from 'react';
import {
	CardContent,
	CardFooter,
	CardHeader,
	StyledCardImageWrapper,
} from './components';
import { CardProps } from './interfaces';
import { StyledCardWrapper } from './styles';
import { Hoverable } from '../hoverable';

const CardComponent: React.FC<CardProps> = ({
	children,
	onClick,
}): React.ReactElement => {
	return (
		<Hoverable>
			<StyledCardWrapper onClick={onClick}>
				<StyledCardImageWrapper />
				{children}
			</StyledCardWrapper>
		</Hoverable>
	);
};

export const Card = Object.assign(CardComponent, {
	CardHeader,
	CardContent,
	CardFooter,
});
