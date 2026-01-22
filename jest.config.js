
const config = {
  collectCoverageFrom: ["<rootDir>/src/**/*.ts"],
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  moduleNameMapper: {
    "@/(.+)": "<rootDir>/src/$1",
    "@/tests/(.+)": "<rootDir>/tests/$1",
  },
  roots: ["<rootDir>/tests", "<rootDir>/tests"],
  transform: {
    "\\.ts$": "ts-jest",
  },
};

module.exports = config;
