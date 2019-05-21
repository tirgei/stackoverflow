import Joi from 'joi';

// Joi schema for user registration data
export const registrationSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    surname: Joi.string(),
    username: Joi.string().alphanum().min(4).max(15).required(),
    password: Joi.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().required()
});