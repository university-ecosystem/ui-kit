import { TextColors } from './interfaces';
import { ecosystemTheme } from '../theme-provider/constants';

export const ColorMap = {
	[TextColors.base]: ecosystemTheme.colors.grey['700'],
	[TextColors.error]: ecosystemTheme.colors.error['base'],
	[TextColors.primary]: ecosystemTheme.colors.primary['600'],
	[TextColors.secondary]: ecosystemTheme.colors.secondary['600'],
	[TextColors.description]: ecosystemTheme.colors.grey['300'],
	[TextColors.inherit]: 'inherit',
};
