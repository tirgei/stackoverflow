import Joi from 'joi';

export const questionSchema = Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    tags: Joi.array().items(Joi.string().alphanum())
});