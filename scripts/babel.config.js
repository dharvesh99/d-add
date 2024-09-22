const BABEL_ENV = process.env.BABEL_ENV
const isCommonJs = BABEL_ENV !== undefined && BABEL_ENV === 'cjs'

module.exports = () => ({
  presets: [
    ['@babel/preset-typescript'],
    [
      '@babel/env',
      {
        bugfixes: true,
        loose: true,
        modules: isCommonJs ? 'commonjs' : false,
        targets: {
          esmodules: isCommonJs ? undefined : true,
          chrome: 70
        }
      }
    ]
  ]
})
