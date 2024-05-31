import { ButtonColor, ButtonColorValues } from './interfaces';
import { ecosystemTheme } from '../theme-provider';

export const ButtonColorMap: Record<
	keyof typeof ButtonColor,
	ButtonColorValues
> = {
	grey: {
		base: ecosystemTheme.colors.grey.base,
		hover: ecosystemTheme.colors.grey[300],
		clicked: ecosystemTheme.colors.grey[700],
	},
	primary: {
		base: ecosystemTheme.colors.primary.base,
		hover: ecosystemTheme.colors.secondary[300],
		clicked: ecosystemTheme.colors.secondary[700],
	},
	contrast: {
		base: ecosystemTheme.colors.contrast.base,
		hover: ecosystemTheme.colors.contrast[300],
		clicked: ecosystemTheme.colors.contrast[700],
	},
};
