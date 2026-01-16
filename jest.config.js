module.export = {
    prest: 'ts-jest',
    testEnvironements: 'node',
    roots:['<rootDir>/tests'],
    testMatch:['**/*.test.ts'],
    coverageDirectory: 'coverage',
    coverageReporters: ['text','lcov','html'],
    collecCoverageForm: [
        'src/**/*.ts',
        '!src/**/*.d.ts'
    ],
    coverageThreshold: {
        global: {
            branches: 70,
            functions: 70,
            lines: 70,
            statement : 70,
        },
    },
};