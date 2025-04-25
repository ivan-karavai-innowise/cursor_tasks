# API Testing: Product Data Validation

## Project Overview
This project implements automated tests for validating product data from the FakeStore API. The implementation was developed through AI-assisted development, focusing on detecting data defects and ensuring data quality through automated testing.

## Development Process

### 1. Initial Setup and Analysis
- Analyzed requirements for testing FakeStore API product data
- Set up testing environment with Jest and Axios
- Configured Babel for modern JavaScript support

### 2. Implementation Evolution

#### First Approach
- Created basic API tests for response validation
- Implemented initial data structure checks
- Added simple validation for required fields

#### Refinement: Mock Data Testing
- Added mock data to test validation logic
- Created separate test cases for different types of defects
- Implemented defect collection and reporting

#### Final Approach: Parameterized Testing
- Refactored tests to use Jest's `test.each`
- Separated valid and invalid test cases
- Implemented specific error messages for each validation rule
- Created centralized validation function

### 3. Key Improvements
- Moved from simple assertions to structured validation
- Added comprehensive error reporting
- Implemented both live API and mock data testing
- Fixed validation logic based on test failures

## Technical Implementation

### Testing Framework
- Jest for test execution and assertions
- Axios for API requests
- Babel for modern JavaScript support

### Validation Rules
1. Title validation:
   - Must be defined
   - Must not be empty or whitespace-only
2. Price validation:
   - Must not be negative
3. Rating validation:
   - Must be present
   - Must not exceed 5

### Test Categories
1. **API Integration Tests**
   - Server response (200 OK)
   - Data structure validation
   - Live data validation

2. **Valid Data Tests**
   - Normal product data
   - Edge cases (zero price, maximum rating)

3. **Invalid Data Tests**
   - Empty titles
   - Whitespace-only titles
   - Null titles
   - Negative prices
   - Invalid ratings (> 5)
   - Missing ratings

## Development Notes

### AI-Assisted Development Process
1. Initial implementation with basic tests
2. Identification of need for mock data testing
3. Discussion about test structure improvement
4. Implementation of parameterized testing
5. Bug discovery and fixing through test failures
6. Documentation generation

### Key Learnings
- Importance of testing both valid and invalid cases
- Value of parameterized testing for clarity and maintenance
- Benefits of centralized validation logic
- Importance of specific error messages
- Real-world API testing considerations

## Project Structure
```
api-testing/
├── package.json          # Project dependencies and scripts
├── babel.config.js       # Babel configuration
├── __tests__/           # Test directory
│   └── products.test.js # Main test file
└── README.md            # Project documentation
```

## Running the Tests

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npm test
```

## Test Output Interpretation
- Successful tests indicate all validations pass
- Failed tests provide specific error messages
- Live API data validation ensures real-world compatibility
- Mock data tests verify validation logic

## Future Improvements
- Add more edge cases
- Implement performance testing
- Add API response time validation
- Implement data format validation
- Add schema validation 