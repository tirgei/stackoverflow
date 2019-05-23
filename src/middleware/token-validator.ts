import {NextFunction, Request, Response} from "express";
import jwt from 'jsonwebtoken';

export const tokenMiddleware = (request: Request, response: Response, next: NextFunction) => {
    let token = request.header('authorization');

    if (token) {
        if (token.startsWith('Bearer ')) {
            token = token.slice(7, token.length);
        }

        jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
           if (error) {
               response.status(400).json({code: 400, message: 'Invalid token provided'})
           } else {
               request.app.locals.userData = decoded;
               next();
           }
        });

    } else {
        response.status(400).json({code: 400, message: 'No auth token provided'});
    }
};