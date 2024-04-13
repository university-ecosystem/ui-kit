import React from 'react';
import { BaseModal, Content, Footer, Header } from './components';
import { ModalProps } from './intefaces';

const ModalWindowComponent: React.FC<ModalProps> = ({
	isOpen,
	onClose,
	children,
}): React.ReactElement => {
	return (
		<BaseModal isOpen={isOpen} onClose={onClose}>
			{children}
		</BaseModal>
	);
};

export const ModalWindow = Object.assign(ModalWindowComponent, {
	Header,
	Content,
	Footer,
});
