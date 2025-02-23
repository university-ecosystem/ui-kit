import React, { useState } from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { MenuProps } from './interfaces';
import { MenuChildrenWrapper, MenuListWrapper, MenuWrapper } from './styles';
import { MenuOption } from './components';

export const Menu: React.FC<MenuProps> = ({
	children,
	options,
	fitContent,
}): React.ReactElement => {
	const [open, setOpen] = useState<boolean>(false);
	return (
		<ClickAwayListener
			onClickAway={() => {
				setOpen(false);
			}}>
			<MenuWrapper fitContent={fitContent}>
				<MenuChildrenWrapper
					onClick={() => {
						setOpen((prev) => !prev);
					}}>
					{children}
				</MenuChildrenWrapper>
				{open && (
					<MenuListWrapper>
						{options?.map((option, index) => (
							<MenuOption key={`${option.title}${index}`} {...option} />
						))}
					</MenuListWrapper>
				)}
			</MenuWrapper>
		</ClickAwayListener>
	);
};
