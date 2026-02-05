import type { Theme } from '@emotion/react';
import { ButtonColor, ButtonColorValues } from './interfaces';

export const ButtonColorMap = (
	theme: Theme
): Record<keyof typeof ButtonColor, ButtonColorValues> => ({
	grey: {
		base: theme.colors.grey.base,
		hover: theme.colors.grey[300],
		clicked: theme.colors.grey[700],
	},
	primary: {
		base: theme.colors.primary.base,
		hover: theme.colors.secondary[300],
		clicked: theme.colors.secondary[700],
	},
	contrast: {
		base: theme.colors.contrast.base,
		hover: theme.colors.contrast[300],
		clicked: theme.colors.contrast[700],
	},
});
