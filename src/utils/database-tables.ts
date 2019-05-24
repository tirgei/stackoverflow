// List of tables
export const tables = [
    'users',
    'questions',
    'question_tags'
];

// Queries to create database tables
export const createTableQueries = [
    "CREATE TABLE IF NOT EXISTS users (" +
    "        id INT NOT NULL AUTO_INCREMENT," +
    "        firstName VARCHAR(250) NOT NULL," +
    "        lastName VARCHAR(250) NOT NULL," +
    "        surname VARCHAR(250) NULL," +
    "        username VARCHAR(250) NOT NULL UNIQUE," +
    "        phone VARCHAR(250) NOT NULL," +
    "        email VARCHAR(250) NOT NULL UNIQUE," +
    "        password VARCHAR(250) NOT NULL," +
    "        createdAt VARCHAR(250) NOT NULL," +
    "        modifiedAt VARCHAR(250) NOT NULL," +
    "        PRIMARY KEY (id))",

    "CREATE TABLE IF NOT EXISTS questions (" +
    "        id INT NOT NULL AUTO_INCREMENT," +
    "        title VARCHAR(250) NOT NULL," +
    "        description VARCHAR(1000) NOT NULL," +
    "        userId INT NOT NULL," +
    "        createdAt VARCHAR(250) NOT NULL," +
    "        modifiedAt VARCHAR(250) NOT NULL," +
    "        PRIMARY KEY (id)," +
    "        FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE)",

    "CREATE TABLE IF NOT EXISTS question_tags (" +
    "        id INT NOT NULL AUTO_INCREMENT," +
    "        questionId INT(250) NOT NULL," +
    "        tag VARCHAR(250) NOT NULL," +
    "        PRIMARY KEY (id)," +
    "        FOREIGN KEY (questionId) REFERENCES questions(id) ON DELETE CASCADE)"
];
