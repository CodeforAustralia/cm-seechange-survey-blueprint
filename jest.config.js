module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    '^.+\\.tsx?$': '@sucrase/jest-plugin'
  },
  testMatch: [
    '<rootDir>/src/**/__tests__/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}'
  ],
  setupFilesAfterEnv: ['@testing-library/jest-dom']
};
