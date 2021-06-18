module.exports = {
  verbose: true,
  setupFilesAfterEnv: [
    './jest.setup',
  ],
  modulePathIgnorePatterns: ['test/e2e/*'],
};
