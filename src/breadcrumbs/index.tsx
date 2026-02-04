import React from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { HiDotsHorizontal } from 'react-icons/hi';
import { BreadcrumbsProps } from './interfaces';
import { BreadcrumbsWrapper } from './styles';
import { Button } from '../button';
import { Menu } from '../menu';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = React.memo(
	({ breadcrumbs, onCrumbClick }) => {
		const renderCrumbs = () => {
			if (breadcrumbs.length <= 3) {
				return (
					<>
						{breadcrumbs.map((crumb, index) => (
							<>
								<Button
									key={`${crumb.link}${index}`}
									onClick={() => onCrumbClick(crumb.link)}
									variant="text"
									size="small"
									color="grey">
									{crumb.children}
								</Button>
								{Boolean(index + 1 < breadcrumbs.length) && (
									<Button
										onlyIcon
										size="small"
										icon={<MdOutlineKeyboardArrowRight />}
										variant="text"
										color="grey"
									/>
								)}
							</>
						))}
					</>
				);
			} else {
				const options = breadcrumbs
					.slice(1, breadcrumbs.length - 1)
					.map((item) => ({
						title: item.children,
						onSelect: () => onCrumbClick(item.link),
					}));

				return (
					<>
						<Button
							key={`${breadcrumbs[0].link}`}
							onClick={() => onCrumbClick(breadcrumbs[0].link)}
							variant="text"
							size="inherit"
							color="grey">
							{breadcrumbs[0].children}
						</Button>
						<Button
							onlyIcon
							icon={<MdOutlineKeyboardArrowRight />}
							variant="text"
							size="inherit"
							color="grey"
						/>
						<Menu options={options} fitContent>
							<Button
								onlyIcon
								icon={<HiDotsHorizontal />}
								variant="text"
								size="fullWidth"
								color="grey"
							/>
						</Menu>
						<Button
							onlyIcon
							icon={<MdOutlineKeyboardArrowRight />}
							variant="text"
							size="inherit"
							color="grey"
						/>
						<Button
							key={`${breadcrumbs[breadcrumbs.length - 1].link}`}
							onClick={() =>
								onCrumbClick(breadcrumbs[breadcrumbs.length - 1].link)
							}
							variant="text"
							size="inherit"
							color="grey">
							{breadcrumbs[breadcrumbs.length - 1].children}
						</Button>
					</>
				);
			}
		};

		return <BreadcrumbsWrapper>{renderCrumbs()}</BreadcrumbsWrapper>;
	}
);
