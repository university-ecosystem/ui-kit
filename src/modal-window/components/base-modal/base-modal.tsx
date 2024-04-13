import React from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { BaseModalProps } from './interfaces';

export const BaseModal: React.FC<BaseModalProps> = ({
	isOpen,
	onClose,
	children,
}): React.ReactElement => {
	if (!isOpen) return <></>;

	return (
		<ClickAwayListener onClickAway={onClose}>{children}</ClickAwayListener>
	);
};
