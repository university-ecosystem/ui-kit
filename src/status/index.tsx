import React from 'react';
import { StatusColor, StatusProps } from './interfaces';
import { StyledIndicator, StyledStatusWrapper } from './styles';

export const Status: React.FC<StatusProps> = ({
	status,
	children,
}): React.ReactElement => {
	return (
		<StyledStatusWrapper>
			<StyledIndicator color={StatusColor[status]} />
			{children}
		</StyledStatusWrapper>
	);
};
