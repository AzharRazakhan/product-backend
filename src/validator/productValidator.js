const Joi = require('joi');

exports.productSchema = Joi.object({
    metaTitle: Joi.string().required(),
    name: Joi.string().required(),
    slug: Joi.string().required(),
    galleryImage: Joi.string().required(),
    price: Joi.number().required(),
    discountedPrice: Joi.number().less(Joi.ref('price')),
    description:Joi.string().required()
})