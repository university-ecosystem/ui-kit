import React from 'react';
import { BeatLoader } from 'react-spinners';
import { DefaultLayoutProps } from './interfaces';
import {
	DefaultEmptySlot,
	DefaultErrorSlot,
	DefaultLoadingSlot,
} from './slots';
import { FullscreenError } from '../../errors';
import { EmptyIllustration, ErrorIllustration } from '../../assets';
import { ecosystemTheme } from '../../theme-provider';

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({
	isLoading,
	isEmpty,
	isError,
	children,
}) => {
	if (isLoading) {
		return (
			<DefaultLoadingSlot.Renderer childs={children}>
				<BeatLoader color={ecosystemTheme.colors.primary.base} />
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
