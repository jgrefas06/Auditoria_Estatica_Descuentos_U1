module.exports = [
  {
    files: ["src/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        console: "readonly",
        module: "readonly"
      }
    },
    rules: {
      "no-var": "error",
      "eqeqeq": ["error", "always"],
      "no-unused-vars": "error",
      "curly": ["error", "all"],
      "no-undef": "error"
    }
  }
];
