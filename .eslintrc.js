module.exports = {
  "parser": "eslint-plugin-coffee",
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "coffee"
  ],
  "extends": [
    "plugin:coffee/eslint-recommended"
  ],
  "globals": {
    "define": true,
    "jQuery": true,
  }
}
