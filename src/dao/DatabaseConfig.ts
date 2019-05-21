import mysql from 'mysql';
import {tables, createTableQueries} from '../utils/database-tables'

export class DatabaseConfig {
    public databaseConnection: mysql.Connection;

    constructor() {
        try {
            this.databaseConnection = this.initiateDbConnection();
            this.createTables();
        } catch (e) {
            console.log(e);
        }
    }

    // Function to initiate database connection
    private initiateDbConnection(): mysql.Connection {
        const conn = mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });

        conn.connect((error) => {
            if (error)
                throw new Error(`Error connecting to DB: ${error}`);

            console.log(`Connected to DB as ID: ${conn.threadId}`);

        });

        return conn
    }

    // Function to create database tables if not present
    private createTables(): void {
        for (let query of createTableQueries) {
            this.databaseConnection.query(query, (error, response) => {
                if (error)
                    console.log(`Error creating table ${createTableQueries.indexOf(query)}: ${error}`);
            })
        }
    }

}