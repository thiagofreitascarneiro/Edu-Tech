module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/essential',
    'prettier'
  ],
  env: {
    node: true, 
  },
  rules: {
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'vue/html-indent': ['error', 2],
  },
  overrides: [
    {
      files: ['jest.config.cjs', '*.spec.js', 'jest.config.js'],
      rules: {
        'no-undef': 'off', 
      }
    }
  ]
};
