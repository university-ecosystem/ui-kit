import React from 'react';
import { RxCross1 } from 'react-icons/rx';
import { HeaderProps } from './interfaces';
import { StyledModalHeader, StyledModalTextWrapper } from './styles';
import { Text } from '../../../text';
import { HeaderSlot } from '../slots';
import { Button } from '../../../button';

export const Header: React.FC<HeaderProps> = ({
	title,
	description,
	children,
	onClose,
}) => {
	return (
		<HeaderSlot.Renderer childs={children}>
			<StyledModalHeader>
				<StyledModalTextWrapper>
					<Text variant="h3">{title}</Text>
					<Text variant="body1" color="description">
						{description}
					</Text>
				</StyledModalTextWrapper>
				<Button
					onlyIcon
					variant="text"
					size="inherit"
					icon={<RxCross1 />}
					onClick={onClose}></Button>
			</StyledModalHeader>
		</HeaderSlot.Renderer>
	);
};
