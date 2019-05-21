import {NextFunction, Request, request, Response, response} from "express";

// Function to handle URLs not available
export const error_404 = (request: Request, response: Response, next: NextFunction) => {
    response.status(404).json({'code': 404, 'message': 'Requested resource not found'});
};