import React, { useMemo } from 'react';
import { useMedia } from 'use-media';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { PageHeaderProps } from './interfaces';
import { PageHeaderActions, PageHeaderWrapper } from './styles';
import { PageHeaderSlot } from '../slots';
import { Typography } from '../../../../typography';
import { Button } from '../../../../button';
import { ecosystemTheme } from '../../../../theme-provider';
import { Menu } from '../../../../menu';

export const PageHeader: React.FC<PageHeaderProps> = ({
	title,
	children,
	actions,
}): React.ReactElement => {
	const isMobile = useMedia({ maxWidth: ecosystemTheme.breakPoints.mobile });

	const menuActions = useMemo(
		() =>
			actions?.map((action) => ({
				title: action.children,
				icon: action.icon,
				onSelect: () => action.onClick,
			})),
		[]
	);

	return (
		<PageHeaderSlot.Renderer childs={children}>
			<PageHeaderWrapper>
				{typeof title === 'string' ? (
					<Typography variant="h3">{title}</Typography>
				) : (
					<>{title}</>
				)}
				<PageHeaderActions>
					{isMobile ? (
						<Menu options={menuActions ?? []}>
							<Button
								onlyIcon
								variant="text"
								size="inherit"
								icon={<BsThreeDotsVertical color="inherit" />}
							/>
						</Menu>
					) : (
						<>
							{actions?.map((action) => {
								return <Button {...action} />;
							})}
						</>
					)}
				</PageHeaderActions>
			</PageHeaderWrapper>
		</PageHeaderSlot.Renderer>
	);
};
