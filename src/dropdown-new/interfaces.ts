import { Option } from './components';
import { InputProps } from '../input';

export type OmitedInput = Omit<InputProps, 'value'>;

export interface SelectProps extends OmitedInput {
	value: Array<Option>;
	options: Array<Option>;
	multiSelect?: boolean;
	disableSearch?: boolean;
	onSelectOption: (value: Array<Option>) => void;
}
