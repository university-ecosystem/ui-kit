import { ecosystemTheme } from '../theme-provider';
import { TypographyColors } from './interfaces';

export const ColorMap = {
	[TypographyColors.base]: ecosystemTheme.colors.grey['600'],
	[TypographyColors.error]: ecosystemTheme.colors.error['base'],
	[TypographyColors.primary]: ecosystemTheme.colors.primary['600'],
	[TypographyColors.secondary]: ecosystemTheme.colors.secondary['600'],
};
