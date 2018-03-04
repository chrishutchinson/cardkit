module.exports = {
  env: {
    es6: true,
    node: true
  },
  globals: {
    window: true,
    document: true
  },
  extends: ["eslint:recommended"],
  rules: {
    "linebreak-style": ["error", "unix"],
    "no-eval": ["error"],
    eqeqeq: ["error"],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "no-unused-expressions": 1,
    "no-unused-vars": 1,
    "no-useless-constructor": 1,
    "no-debugger": 1,
    "promise/no-nesting": 0,
    "promise/avoid-new": 0,
    "promise/no-callback-in-promise": 0
  },
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react"],
  parser: "babel-eslint"
};
