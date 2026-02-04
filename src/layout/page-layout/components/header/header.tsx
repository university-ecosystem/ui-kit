import React, { useMemo } from 'react';
import { useMedia } from 'use-media';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { PageHeaderProps } from './interfaces';
import { PageHeaderActions, PageHeaderWrapper } from './styles';
import { PageHeaderSlot } from '../slots';
import { Text } from '../../../../text';
import { Button } from '../../../../button';
import { ecosystemTheme } from '../../../../theme-provider/constants';
import { Menu } from '../../../../menu';

export const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	menuButtonColors = 'primary',
	children,
	actions,
}): React.ReactElement => {
	const isMobile = useMedia({ maxWidth: ecosystemTheme.breakPoints.mobile });

	const menuActions = useMemo(
		() =>
			actions?.map((action) => ({
				title: action.children,
				icon: action.icon,
				onSelect: action.onClick,
			})),
		[]
	);

	return (
		<PageHeaderSlot.Renderer childs={children}>
			<PageHeaderWrapper>
				{typeof title === 'string' ? (
					<Text variant="h3">{title}</Text>
				) : (
					<>{title}</>
				)}
				<PageHeaderActions>
					{isMobile && menuActions?.length ? (
						<Menu options={menuActions ?? []}>
							<Button
								onlyIcon
								color={menuButtonColors}
								variant="text"
								size="inherit"
								icon={<BsThreeDotsVertical color="inherit" />}
							/>
						</Menu>
					) : (
						<>
							{actions?.map((action, index) => {
								return <Button key={index} {...action} />;
							})}
						</>
					)}
				</PageHeaderActions>
			</PageHeaderWrapper>
		</PageHeaderSlot.Renderer>
	);
};
