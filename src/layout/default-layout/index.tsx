import React from 'react';
import { BeatLoader } from 'react-spinners';
import { IoReloadOutline } from 'react-icons/io5';
import { DefaultLayoutProps } from './interfaces';
import {
	DefaultEmptySlot,
	DefaultErrorSlot,
	DefaultLoadingSlot,
} from './slots';
import { FullscreenError } from '../../errors';
import { EmptyIllustration, ErrorIllustration } from '../../assets';
import { ecosystemTheme } from '../../theme-provider/constants';
import { reloadPage } from '../../utils';

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
					description="попробуйте перезагрузить страницу"
					image={<ErrorIllustration />}
					action={{
						children: 'Перезагрузить',
						size: 'inherit',
						icon: <IoReloadOutline />,
						onClick: reloadPage,
					}}
				/>
			</DefaultErrorSlot.Renderer>
		);
	}

	if (isEmpty) {
		return (
			<DefaultEmptySlot.Renderer childs={children}>
				<FullscreenError
					title="Мы ничего не нашли"
					image={<EmptyIllustration />}
				/>
			</DefaultEmptySlot.Renderer>
		);
	}

	return <>{children}</>;
};

export * from './interfaces';
export * from './slots';
