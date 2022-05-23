module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'next/core-web-vitals',
        'google',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    rules: {
        semi: ['error', 'never'],
        'require-jsdoc': ['off'],
        'spaced-comment': ['off'],
        'max-len': ['off'],
        'new-cap': ['off'],
        'react/display-name': ['off'],
        '@next/next/no-page-custom-font': ['off'],
        'import/order': [
            'error',
            {
                alphabetize: {
                    order: 'asc',
                },
            },
        ],
    },
};
