import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { AlertProps } from './interfaces';
import { HeaderWrapperStyled, WrapperStyled } from './alert.style';
import { useToggle } from '../utils';
import { Button } from '../button';

export const Alert: React.FC<AlertProps> = ({
	title,
	children,
	defaultOpened = false,
	closable = true,
	color = 'info',
}) => {
	const { flag: isOpen, toggle } = useToggle(defaultOpened);

	return (
		<WrapperStyled color={color}>
			<HeaderWrapperStyled>
				{title}
				{closable && (
					<Button
						variant="text"
						size="inherit"
						onClick={toggle}
						onlyIcon
						icon={<IoIosArrowDown />}
					/>
				)}
			</HeaderWrapperStyled>
			{isOpen && <>{children}</>}
		</WrapperStyled>
	);
};
