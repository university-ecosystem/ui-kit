import React from 'react';
import { DefaultLayoutProps } from './interfaces';
import {
	DefaultEmptySlot,
	DefaultErrorSlot,
	DefaultLoadingSlot,
} from './slots';
import { FullscreenError } from '../../errors';
import { EmptyIllustration, ErrorIllustration } from '../../assets';

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
	isLoading,
	isEmpty,
	isError,
	children,
}) => {
	if (isLoading) {
		return (
			<DefaultLoadingSlot.Renderer childs={children}>
				Loading...
			</DefaultLoadingSlot.Renderer>
		);
	}

	if (isError) {
		return (
			<DefaultErrorSlot.Renderer childs={children}>
				<FullscreenError
					title="Произошла ошибка"
					image={<ErrorIllustration />}
				/>
			</DefaultErrorSlot.Renderer>
		);
	}

	if (isEmpty) {
		return (
			<DefaultEmptySlot.Renderer childs={children}>
				<FullscreenError title="Тут пусто" image={<EmptyIllustration />} />
			</DefaultEmptySlot.Renderer>
		);
	}

	return <>{children}</>;
};
