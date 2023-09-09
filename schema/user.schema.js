import Joi from "joi"
/* import { joi } from "joi-oid"; */
export const createUserSchema = Joi.object({
    email: Joi.string().required().email({minDomainSegments: 2}).messages({
        'any.required': 'The email is required',
        'string.empty': 'The email is required',
        'string.email': 'The mail is invalid'
    }),
    password: Joi.string().required().min(8).max(30).alphanum().messages({'any.required': 'NAME_REQUIRED',
        'string.empty': 'The name is required',
        'string.min': 'The name is too short',
        'string.max': 'The name is too Large',
    })
    /* .regex("/^[a-zA-Z0-9!@#$%&*]{3,25}$/") */,
    name: Joi.string().required().min(2).max(40),
    image: Joi.string().required().uri().messages({
        'any.required': 'The image is required',
        'string.empty': 'The image is required',
        'string.uri':'The URL is invalid'
    }),
    /* itineraries: joi.objectId(), */
})