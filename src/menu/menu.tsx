import React from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { MenuProps } from './interfaces';
import { MenuChildrenWrapper, MenuListWrapper, MenuWrapper } from './styles';
import { MenuOption } from './components';
import { useToggle } from '../utils';

export const Menu: React.FC<MenuProps> = ({
	children,
	options,
	fitContent,
}): React.ReactElement => {
	const { flag: open, toggleOff, toggle } = useToggle(false);
	return (
		<ClickAwayListener onClickAway={toggleOff}>
			<MenuWrapper fitContent={fitContent}>
				<MenuChildrenWrapper onClick={toggle}>{children}</MenuChildrenWrapper>
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
