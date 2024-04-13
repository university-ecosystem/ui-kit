import { TypographyColors } from './interfaces';
import { ecosystemTheme } from '../theme-provider';

export const ColorMap = {
	[TypographyColors.base]: ecosystemTheme.colors.grey['700'],
	[TypographyColors.error]: ecosystemTheme.colors.error['base'],
	[TypographyColors.primary]: ecosystemTheme.colors.primary['600'],
	[TypographyColors.secondary]: ecosystemTheme.colors.secondary['600'],
	[TypographyColors.inherit]: 'inherit',
};
