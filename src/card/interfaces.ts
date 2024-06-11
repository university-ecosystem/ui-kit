export interface CardProps {
	children: React.ReactElement | React.ReactNode;
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}
