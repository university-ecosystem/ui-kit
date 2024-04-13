declare module 'react-slotify' {
	export interface RendererProps {
		childs: React.ReactNode;
		children?: React.ReactNode;
	}

	export type RendererType<P> = React.FC<RendererProps & P>;

	export type SlotProps<P> = {
		showChildren?: boolean;
		restProps?: P & { defaultChildren: React.ReactNode };
	};

	export type NormalOrFunctionChildren<P> =
		| React.ReactNode
		| ((props: P & { defaultChildren: React.ReactNode }) => React.ReactNode);

	export type SlotType<P> = {
		(
			props: SlotProps<P> & { children?: NormalOrFunctionChildren<P> }
		): React.ReactElement | null;
		Renderer: RendererType<P>;
	};

	export function createSlot<P extends object>(): SlotType<P>;
}
