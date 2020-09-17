module.exports = {
	clearMocks: true,
	coverageProvider: "v8",
	preset: "ts-jest",
	testEnvironment: "node",
	testTimeout: 50000,
	testPathIgnorePatterns: ["utils"],
};
