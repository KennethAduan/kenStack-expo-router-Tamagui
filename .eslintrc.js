module.exports = {
  root: true,
  extends: ['universe/native'],
  rules: {
    'no-unused-vars': ['warn', { vars: 'all', args: 'after-used', ignoreRestSiblings: false }],
    // Integrate Prettier rules here
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
  // Ensure you have the necessary plugins installed and recognized
  plugins: ['prettier'],
};
