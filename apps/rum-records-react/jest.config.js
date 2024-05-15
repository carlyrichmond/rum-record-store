/* eslint-disable */
module.exports = {
  displayName: 'rum-records-react',
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  testEnvironment: 'jsdom',
  coverageDirectory: '../../coverage/apps/rum-records-react',
};
