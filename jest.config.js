module.exports = {
  testEnvironment: "node",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: ["/node_modules/(?!axios)/"],
  resolver: "jest-node-exports-resolver",
  globals: {
    "ts-jest": {
      useESM: true,
    },
  },
  testTimeout: 20000,
};
