export interface Tab {
	title: string | React.ReactElement;
	value: string | boolean | number;
}

export interface TabsProps {
	selected: Tab['value'];
	options: Array<Tab>;
	onSelect: (tab: Tab) => void;
}
