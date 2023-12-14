module.exports = {
  "env": {
    "browser": true,
    "es2021": true
  },
  "extends": "standard-with-typescript",
  "overrides": [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "@typescript-eslint/semi": "off",
    "@typescript-eslint/object-curly-spacing": "off",
    "@typescript-eslint/comma-dangle": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "@typescript-eslint/consistent-type-imports": "off",
  }
}
