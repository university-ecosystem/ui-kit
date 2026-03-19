import React from 'react';
import { TabsProps } from './interfaces';
import { TabItemWrapper, TabsWrapperStyled } from './tabs.style';
import { Text } from '../text';

export const Tabs: React.FC<TabsProps> = ({ options, selected, onSelect }) => {
	return (
		<TabsWrapperStyled>
			{options.map((item) => (
				<TabItemWrapper
					selected={item.value === selected}
					onClick={() => onSelect(item)}>
					{typeof item.title === 'string' ? (
						<Text variant="body1">{item.title}</Text>
					) : (
						<>{item.title}</>
					)}
				</TabItemWrapper>
			))}
		</TabsWrapperStyled>
	);
};
