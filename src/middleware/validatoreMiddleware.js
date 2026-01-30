module.exports = (schema) => {
    return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false,  allowUnknown: true,   
  stripUnknown: true   });

    if (error) {
      return res.status(400).json({
        message: "Validation error",
        errors: error.details.map((e) => e.message),
      });
    }

    next();
  };
}