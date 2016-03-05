module.exports = {
  root: true,
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': [2, {'anonymous': 'always', 'named': 'never'}],
    'no-multi-spaces': 0,
    'key-spacing': 0
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jasmine: true
  }
}
