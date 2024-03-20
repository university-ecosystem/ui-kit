import React from 'react';
import { ThemeProvider } from '../src/theme-provider';

const ThemeDecorator = (storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>;

export default ThemeDecorator;
