export interface MenuOptionProps {
	title: string | React.ReactElement | React.ReactNode;
	description?: string;
	icon?: React.ReactElement | React.ReactNode;
	onSelect?: (event: React.MouseEvent) => void;
}

export interface MenuProps {
	children?: React.ReactElement | React.ReactNode;
	options?: Array<MenuOptionProps>;
	fitContent?: boolean;
}
