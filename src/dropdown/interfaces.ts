import { InputProps } from '../input';
import { Option } from './components';

export type OmitedInput = Omit<InputProps, 'value'>;

export interface SelectProps extends OmitedInput {
	value: Array<Option>;
	options: Array<Option>;
	multiSelect?: boolean;
	onSelectOption: (value: Array<Option>) => void;
}
