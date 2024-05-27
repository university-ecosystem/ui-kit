export interface Breadcrumb {
	link: string;
	children: string | React.ReactElement | React.ReactNode;
}

export interface BreadcrumbsProps {
	breadcrumbs: Array<Breadcrumb>;
	onCrumbClick: (link: string) => void;
}
