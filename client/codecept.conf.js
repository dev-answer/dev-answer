exports.config = {
  tests: './test/e2e/*.test.js',
  output: './test/e2e/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      show: false,
      windowSize: '1200x900',
    },
  },
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'client',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true,
    },
    tryTo: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
