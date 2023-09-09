import Joi from "joi"
export const createCitySchema = Joi.object({
    city: Joi.string().required(),
    country: Joi.string().required(),
    url: Joi.string().required().uri(),
    language: Joi.string(),
    currency: Joi.string(),
    description: Joi.string(),
    cost: Joi.number()
})
