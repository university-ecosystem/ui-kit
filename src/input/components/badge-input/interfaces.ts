import { InputSize } from '../../interfaces';
import { Option } from '../../../dropdown';

export interface BadgeInputProps {
	variant?: InputSize;
	value?: Array<Option>;
	placeholder?: string;
	errorText?: string;
	onClick?: () => void;
	icon?: React.ReactElement | React.ReactNode;
}
