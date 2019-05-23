import mysql from 'mysql';
import {IUser} from "../interfaces/IUser";
import {IQuestion} from "../interfaces/IQuestion";

export class Dao {
    private databaseConnection: mysql.Connection;
    private baseUrl: string;

    constructor(connection: mysql.Connection) {
        this.databaseConnection = connection;
        this.baseUrl = process.env.DOMAIN + process.env.API_VER_1;
    }

    // Function to save new user record
    public addUser(user: IUser): Promise<any> {
        user.createdAt = Date.now();
        user.modifiedAt = Date.now();

        return new Promise<any>((resolve, reject) => {
            this.databaseConnection.query('INSERT INTO `users` SET ? ', user, (err, results, fields) => {
                if (err) {
                    reject({error: err.sqlMessage});
                    return;
                }

                resolve({message: 'User registered successfully', userId: results.insertId});
            });
        })
    }

    // Function to fetch specific user details
    public fetchUserByUsername(username: string): Promise<IUser> {
        return new Promise<IUser>((resolve, reject) => {
            this.databaseConnection.query('SELECT * FROM `users` WHERE username = ?', [username], (err, result) => {
                if (err) {
                    reject({error: err.sqlMessage});
                    return;
                }

                resolve(result[0])
            });
        })
    }

    // Function to save new question record
    public addQuestion(question: IQuestion): Promise<any> {
        question.createdAt = Date.now();
        question.modifiedAt = Date.now();
        if (question.tags) question.tags = JSON.stringify(question.tags);

        return new Promise<any>((resolve, reject) => {
            this.databaseConnection.query('INSERT INTO `questions` SET ? ', question, (err, results, fields) => {
                if (err) {
                    reject({error: err.sqlMessage});
                    return;
                }

                resolve({message: 'Question added successfully', questionId: results.insertId});
            });
        });
    }

    // Function to fetch all questions
    public fetchAllQuestions(): Promise<Array<IQuestion>> {
        return new Promise<Array<IQuestion>>((resolve, reject) => {
            this.databaseConnection.query('SELECT * FROM `questions`', (err, results, fields) => {
               if (err) {
                   reject({error: err.sqlMessage});
                   return;
               }

               resolve(results);
            });
        })
    }

}