/** @type {import('jest').Config} */
export default {
  testEnvironment: 'node',
  transform: {},
  
  // Тестовые файлы
  testMatch: ['**/__tests__/**/*.test.js'],
  
  // Покрытие кода
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['lcov', 'text'],  // lcov для SonarQube
  
  collectCoverageFrom: [
    'src/**/*.js',
    '!node_modules/**'
  ]
};