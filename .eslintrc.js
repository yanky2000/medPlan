module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
            modules: true,
            experimentalObjectRestSpread: true,
        },
    },
    extends: ['prettier'],
    plugins: ['react', 'prettier'],
    rules: {
        "prettier/prettier": "error"
        // 'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    },
};
