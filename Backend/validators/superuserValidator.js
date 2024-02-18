import Joi from "joi";

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const superuserSignupSchema = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8).max(16),
});

const validateSuperuserSignup = validator(superuserSignupSchema);

export { validateSuperuserSignup };
