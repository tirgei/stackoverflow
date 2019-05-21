import {NextFunction, Request, Response} from "express";
import Joi from 'joi';

// Function to validate data using Joi schema
export const validationMiddleware = (dataSchema: any, property: string) => {
    return (request: Request, response: Response, next: NextFunction) => {
        Joi.validate(request[property], dataSchema, ((err, value) => {
            if (err) {
                response.status(400).json({
                    code: 400,
                    message: "Invalid data provided",
                    debug: {
                        error: err.details[0].context.key,
                        message: err.details[0].message
                    }
                });
            } else {
                next();
            }
        }));
    }
};