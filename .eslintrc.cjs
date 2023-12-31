module.exports = {
    env: {
        es2022: true,
        node: true
    },
    globals: {
        NodeJS: true
    },
    extends: ["alloy", "alloy/typescript"],
    overrides: [],
    plugins: [],
    rules: {
        'no-return-assign': 'off',
        'eqeqeq': 'off',
        'semi': 2,
        'eol-last': 2,
        '@typescript-eslint/no-require-imports': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-this-alias': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-namespace': 'off',
        'max-params': 0,
        'comma-spacing': ["error", { "before": false, "after": true }]
    }
};
