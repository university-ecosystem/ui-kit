import React from 'react';
import { FaFilter } from 'react-icons/fa';
import { FilterErrorWrapper, FilterIconWrapper } from './styles';
import { Text } from '../../text';

export const FilterError = () => {
	return (
		<FilterErrorWrapper>
			<FilterIconWrapper>
				<FaFilter color="white" />
			</FilterIconWrapper>
			<Text variant="body1">Ничего не нашлось</Text>
		</FilterErrorWrapper>
	);
};
