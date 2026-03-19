import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import {
	StyledAccordionContent,
	StyledAccordionTitle,
	StyledAccordionWrapper,
} from './styles';
import { AccordionProps } from './interfaces';
import { useToggle } from '../utils';
import { Text } from '../text';

export const Accordion: React.FC<AccordionProps> = ({
	children,
	title,
	defaultExpand,
	notClosable,
}): React.ReactElement => {
	const { flag: isOpened, toggle } = useToggle(defaultExpand);

	return (
		<StyledAccordionWrapper onClick={notClosable ? void 0 : toggle}>
			<StyledAccordionTitle>
				{typeof title === 'string' ? (
					<Text variant="h3">{title}</Text>
				) : (
					<>{title}</>
				)}

				{!notClosable && (
					<IoIosArrowDown transform={isOpened ? 'rotate(180)' : ''} />
				)}
			</StyledAccordionTitle>

			{(isOpened || notClosable) && (
				<StyledAccordionContent>{children}</StyledAccordionContent>
			)}
		</StyledAccordionWrapper>
	);
};
