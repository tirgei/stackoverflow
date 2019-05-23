import {Dao} from '../dao/Dao'
import {Request, Response} from "express";
import {IUser} from "../interfaces/IUser";
import bcrpty from 'bcryptjs';
import jwt from 'jsonwebtoken';

export class UserController {
    private dao: Dao;

    constructor(dao: Dao) {
        this.dao = dao;
    }

    // Function to register new user
    public registerUser(request: Request, response: Response) {
        const userDetails: IUser = request.body;

        bcrpty.hash(userDetails.password, Number(process.env.SALT_ROUNDS)).then((hash) => {
            userDetails.password = hash;

            this.dao.addUser(userDetails).then((result) => {
                response.status(200).json({code: 200, message: result.message, userId: result.userId});

            }).catch((error) => {
                response.status(400).json({code: 400, message: 'Error registering user', debug: error});
            });
        });
    }

    // Function to login user
    public loginUser(request: Request, response: Response) {
        const userDetails: IUser = request.body;

        this.dao.fetchUserByUsername(userDetails.username).then((user: IUser) => {
            if (user) {
                bcrpty.compare(userDetails.password, user.password).then((match) => {
                   if (match) {
                       delete user.password;
                       const accessToken = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn: '24h'});
                       response.status(200).json({code: 200, message: 'Login successful', user: user, token: accessToken});
                   } else
                       response.status(400).json({code: 404, message: 'Incorrect username or password'});
                });
            } else {
                response.status(404).json({code: 404, message: 'User not found'});
            }
        }).catch((error) => {
            response.status(404).json({code: 404, message: 'User not found', debug: error});
        });
    }
}