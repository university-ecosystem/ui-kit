import React from 'react';
import { PageHeaderProps } from './interfaces';
import { PageHeaderWrapper } from './styles';
import { PageHeaderSlot } from '../slots';
import { Typography } from '../../../../typography';

export const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	children,
}): React.ReactElement => {
	return (
		<PageHeaderSlot.Renderer childs={children}>
			<PageHeaderWrapper>
				{typeof title === 'string' ? (
					<Typography variant="h3">{title}</Typography>
				) : (
					<>{title}</>
				)}
			</PageHeaderWrapper>
		</PageHeaderSlot.Renderer>
	);
};
