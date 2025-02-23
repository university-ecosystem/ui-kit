export interface AccordionProps {
	children?: React.ReactNode | React.ReactElement;
	title: string | React.ReactNode | React.ReactElement;
	defaultExpand?: boolean;
	notClosable?: boolean;
}
