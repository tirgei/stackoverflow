import mysql from 'mysql';
import {IUser} from "../interfaces/IUser";

export class Dao {
    private databaseConnection: mysql.Connection;
    private baseUrl: string;

    constructor(connection: mysql.Connection) {
        this.databaseConnection = connection;
        this.baseUrl = process.env.DOMAIN + process.env.API_VER_1;
    }

    // Function to insert new user record
    public addUser(user: IUser): Promise<any> {
        user.createdAt = Date.now();
        user.modifiedAt = Date.now();

        return new Promise<any>((resolve, reject) => {
            this.databaseConnection.query('INSERT INTO `users` SET ? ', user, (err, results, fields) => {
                if (err) {
                    reject({message: err.sqlMessage});
                    return;
                }

                resolve({message: 'User added successfully', user: results});
            });
        })
    }

}