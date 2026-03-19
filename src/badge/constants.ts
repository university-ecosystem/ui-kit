import { Theme } from '@emotion/react';
import { BadgeColor, BadgeColorValues } from './interfaces';

export const BadgeColorMap = (
	theme: Theme
): Record<keyof typeof BadgeColor, BadgeColorValues> => ({
	grey: {
		base: theme.colors.grey.base,
		hover: theme.colors.grey[300],
	},
	primary: {
		base: theme.colors.primary.base,
		hover: theme.colors.secondary[300],
	},
	contrast: {
		base: theme.colors.contrast.base,
		hover: theme.colors.contrast[300],
	},
});
