module.exports = {
  plugins: ["react", "react-native"],
  parser: "babel-eslint",
  parserOptions: {
    
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    "react-native/react-native": true
  },
  root: true,
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 2,
    "react-native/no-raw-text": 2
  }
};
