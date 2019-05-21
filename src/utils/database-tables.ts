// List of tables
export const tables = [
    'users'
];

// Queries to create database tables
export const createTableQueries = [
    "CREATE TABLE IF NOT EXISTS users (" +
    "        id SERIAL PRIMARY KEY NOT NULL AUTO_INCREMENT," +
    "        firstName VARCHAR(250) NOT NULL," +
    "        lastName VARCHAR(250) NOT NULL," +
    "        surname VARCHAR(250) NULL," +
    "        username VARCHAR(250) NOT NULL," +
    "        phone VARCHAR(250) NOT NULL," +
    "        email VARCHAR(250) NOT NULL," +
    "        password VARCHAR(250) NOT NULL," +
    "        createdAt VARCHAR(250) NOT NULL," +
    "        modifiedAt VARCHAR(250) NOT NULL )"
];