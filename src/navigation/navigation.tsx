import React from 'react';
import {
	StyledLogoWrapper,
	StyledNavigationWrapper,
	StyledOptionsWrapper,
} from './styles';
import { NavigationProps } from './interfaces';
import { NavigationOption } from './components';

export const Navigation: React.FC<NavigationProps> = ({
	logo,
	options,
	onSelectOption,
}): React.ReactElement => {
	return (
		<StyledNavigationWrapper>
			<StyledLogoWrapper>{logo}</StyledLogoWrapper>
			<StyledOptionsWrapper>
				{options.map((option) => {
					return <NavigationOption {...option} onSelect={onSelectOption} />;
				})}
			</StyledOptionsWrapper>
		</StyledNavigationWrapper>
	);
};
