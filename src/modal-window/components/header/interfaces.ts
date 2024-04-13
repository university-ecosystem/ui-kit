export interface HeaderProps {
	title: string;
	description?: string;
	children?: React.ReactElement | React.ReactNode;
	onClose: () => void;
}
