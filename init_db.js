const pool = require('./db');

const createTableQuery = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE
);
`;

const seedDataQuery = `
INSERT INTO users (name, email)
VALUES
    ('Ivan Ivanov', 'ivan@gmail.com'),
    ('Petr Petrov', 'peter@gmail.com')
ON CONFLICT (email) DO NOTHING;
`;

(async () => {
    try {
        await pool.query(createTableQuery);
        await pool.query(seedDataQuery);
        console.log('Table created and seeded successfully');
        
    } catch (err) {
        console.error('Error during table creation/seeding', err);
    } finally {
        pool.end();
    }
})();