import {Dao} from '../dao/Dao'
import {Request, Response} from "express";
import {IUser} from "../interfaces/IUser";
import bcrpty from 'bcryptjs';

export class UserController {
    private dao: Dao;

    constructor(dao: Dao) {
        this.dao = dao;
    }

    // Function to register new user
    public registerCitizen(request: Request, response: Response) {
        const userDetails: IUser = request.body;

        bcrpty.hash(userDetails.password, Number(process.env.SALT_ROUNDS)).then((hash) => {
            userDetails.password = hash;

            this.dao.addUser(userDetails).then((result) => {
                response.status(200).json({code: 200, message: result.message, userId: result.userId});

            }).catch((error) => {
                response.status(400).json({code: 400, message: 'Error registering user', debug: [{error: error}]});
            });
        });
    }

}