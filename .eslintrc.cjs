module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:storybook/recommended',
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	plugins: ['eslint-plugin-import'],
	parser: '@typescript-eslint/parser',
	rules: {
		'sort-imports': [
			'error',
			{
				ignoreCase: true,
				ignoreDeclarationSort: true,
			},
		],
		'import/order': [
			1,
			{
				groups: [
					'external',
					'builtin',
					'internal',
					'sibling',
					'parent',
					'index',
				],
			},
		],
	},
};
