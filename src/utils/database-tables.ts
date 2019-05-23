// List of tables
export const tables = [
    'users',
    'questions'
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
    "        modifiedAt VARCHAR(250) NOT NULL ) ENGINE=InnoDB",

    "CREATE TABLE IF NOT EXISTS questions (" +
    "        id SERIAL PRIMARY KEY NOT NULL AUTO_INCREMENT," +
    "        title VARCHAR(250) NOT NULL," +
    "        description VARCHAR(1000) NOT NULL," +
    "        userId INTEGER(250) NULL," +
    "        tags VARCHAR(250) NULL," +
    "        createdAt VARCHAR(250) NOT NULL," +
    "        modifiedAt VARCHAR(250) NOT NULL )" ,
];
