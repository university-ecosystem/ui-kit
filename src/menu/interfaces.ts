export interface MenuOptionProps {
	title: string;
	description?: string;
	icon?: React.ReactElement | React.ReactNode;
	onSelect: () => void;
}

export interface MenuProps {
	children?: React.ReactElement | React.ReactNode;
	options?: Array<MenuOptionProps>;
}
