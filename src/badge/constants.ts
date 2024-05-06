import { BadgeColor, BadgeColorValues } from './interfaces';
import { ecosystemTheme } from '../theme-provider';

export const BadgeColorMap: Record<keyof typeof BadgeColor, BadgeColorValues> =
	{
		grey: {
			base: ecosystemTheme.colors.grey.base,
			hover: ecosystemTheme.colors.grey[300],
		},
		primary: {
			base: ecosystemTheme.colors.primary.base,
			hover: ecosystemTheme.colors.secondary[300],
		},
	};
