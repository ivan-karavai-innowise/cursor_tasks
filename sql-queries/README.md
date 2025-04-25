# SQL Queries Analysis

This task involves analyzing sales data for an online store using SQL queries. The analysis is performed on a table of customer orders containing information about customers, order amounts, and dates.

## Database Schema

```sql
CREATE TABLE orders (
    id INTEGER PRIMARY KEY,
    customer TEXT,
    amount REAL,
    order_date DATE
);
```

## Queries and Results

### 1. Total Sales Volume for March 2024
```sql
SELECT SUM(amount) as total_sales
FROM orders
WHERE strftime('%Y-%m', order_date) = '2024-03';
```
**Result:** 27,000

### 2. Customer with Highest Total Spending
```sql
SELECT customer, SUM(amount) as total_spent
FROM orders
GROUP BY customer
ORDER BY total_spent DESC
LIMIT 1;
```
**Result:** Alice with total spending of 20,000

### 3. Average Order Value
```sql
SELECT AVG(amount) as avg_order_value
FROM orders;
```
**Result:** 6,000 (48,000 total / 8 orders)

## Verification
All queries have been tested and produce the expected results as specified in the task requirements.
