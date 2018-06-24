const path = require('path');

module.exports = {
  rootDir: path.join(process.cwd(), '../'),
  collectCoverage: true,
  verbose: true,
  testMatch: ["**/?(*.)(spec|test|unit.test).js?(x)"],
  "transformIgnorePatterns": [
    "/node_modules/(?!test-component).+\\.js$"
  ],
  "moduleNameMapper": {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss)$": "identity-obj-proxy"
    }
};
