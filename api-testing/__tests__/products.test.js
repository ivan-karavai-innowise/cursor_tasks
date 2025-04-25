const axios = require('axios');

const API_URL = 'https://fakestoreapi.com/products';

// Test data cases
const validProducts = [
    {
        id: 1,
        title: "Valid Product",
        price: 99.99,
        rating: { rate: 4.5 }
    },
    {
        id: 2,
        title: "Another Valid Product",
        price: 0,  // Edge case: zero price is valid
        rating: { rate: 5.0 }  // Edge case: maximum valid rating
    }
];

const invalidProducts = [
    {
        case: 'empty title',
        product: {
            id: 3,
            title: "",
            price: 100,
            rating: { rate: 4.5 }
        },
        expectedError: 'title must not be empty'
    },
    {
        case: 'whitespace title',
        product: {
            id: 4,
            title: "   ",
            price: 75,
            rating: { rate: 4.0 }
        },
        expectedError: 'title must not be empty'
    },
    {
        case: 'null title',
        product: {
            id: 5,
            title: null,
            price: 50,
            rating: { rate: 4.0 }
        },
        expectedError: 'title must be defined'
    },
    {
        case: 'negative price',
        product: {
            id: 6,
            title: "Product with negative price",
            price: -50,
            rating: { rate: 4.0 }
        },
        expectedError: 'price must not be negative'
    },
    {
        case: 'rating > 5',
        product: {
            id: 7,
            title: "Product with invalid rating",
            price: 75,
            rating: { rate: 6.5 }
        },
        expectedError: 'rating must not exceed 5'
    },
    {
        case: 'missing rating',
        product: {
            id: 8,
            title: "Product without rating",
            price: 120
        },
        expectedError: 'rating must be defined'
    }
];

// Validation function
function validateProduct(product) {
    if (!product.title && product.title !== "") {
        throw new Error('title must be defined');
    }
    if (product.title.trim() === '') {
        throw new Error('title must not be empty');
    }
    if (product.price < 0) {
        throw new Error('price must not be negative');
    }
    if (!product.rating) {
        throw new Error('rating must be defined');
    }
    if (product.rating.rate > 5) {
        throw new Error('rating must not exceed 5');
    }
}

describe('FakeStore API Product Data Tests', () => {
    let response;
    let products;

    beforeAll(async () => {
        response = await axios.get(API_URL);
        products = response.data;
    });

    test('server should respond with status code 200', () => {
        expect(response.status).toBe(200);
    });

    test('response should contain an array of products', () => {
        expect(Array.isArray(products)).toBe(true);
        expect(products.length).toBeGreaterThan(0);
    });

    test('live API data should pass all validations', () => {
        products.forEach(product => {
            expect(() => validateProduct(product)).not.toThrow();
        });
    });
});

describe('Product Validation Tests', () => {
    describe('Valid Products', () => {
        test.each(validProducts)('should accept valid product (id: $id)', (product) => {
            expect(() => validateProduct(product)).not.toThrow();
        });
    });

    describe('Invalid Products', () => {
        test.each(invalidProducts)(
            'should reject product with $case',
            ({ product, expectedError }) => {
                expect(() => validateProduct(product)).toThrow(expectedError);
            }
        );
    });
}); 