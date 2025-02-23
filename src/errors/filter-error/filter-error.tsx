import React from 'react';
import { FaFilter } from 'react-icons/fa';
import { FilterErrorWrapper, FilterIconWrapper } from './styles';
import { Typography } from '../../typography';

export const FilterError = () => {
	return (
		<FilterErrorWrapper>
			<FilterIconWrapper>
				<FaFilter color="white" />
			</FilterIconWrapper>
			<Typography variant="body1">Ничего не нашлось</Typography>
		</FilterErrorWrapper>
	);
};
