// rollup.config.js
/* eslint-disable @typescript-eslint/no-var-requires */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import terser from '@rollup/plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import url from 'rollup-plugin-url';
import image from '@rollup/plugin-image';
import gzipPlugin from 'rollup-plugin-gzip';

import { babel } from '@rollup/plugin-babel';

import packageJson from './package.json';

export default [
	{
		input: 'src/index.ts',
		output: [
			{
				file: packageJson.module,
				format: 'esm',
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			gzipPlugin,
			url({
				include: ['**/*.ttf'],
				limit: Infinity,
			}),
			typescript({ tsconfig: './tsconfig.json' }),
			terser(),
			image(),
			babel({ plugins: ['@emotion'] }),
		],
		external: ['react', 'react-dom'],
	},
	{
		input: 'src/index.ts',
		output: [{ file: 'dist/types.d.ts', format: 'es' }],
		plugins: [
			dts.default({
				exclude: ['**/*.stories.tsx'],
			}),
		],
	},
];
