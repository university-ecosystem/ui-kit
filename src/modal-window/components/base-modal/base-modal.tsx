import React from 'react';
import ClickAwayListener from 'react-click-away-listener';
import { BaseModalProps } from './interfaces';
import {
	BaseModalBackdrop,
	BaseModalContainer,
	BaseModalWrapper,
} from './styles';
import { Portal } from '../../../portal';

export const BaseModal: React.FC<BaseModalProps> = ({
	isOpen,
	onClose,
	children,
}): React.ReactElement => {
	if (!isOpen) return <></>;

	return (
		<Portal>
			<BaseModalContainer>
				<BaseModalBackdrop />
				<ClickAwayListener onClickAway={onClose}>
					<BaseModalWrapper>{children}</BaseModalWrapper>
				</ClickAwayListener>
			</BaseModalContainer>
		</Portal>
	);
};
