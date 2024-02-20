import Joi from "joi";

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const superuserSignupSchema = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8).max(16),
});

const adminSignupSchema = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().required().email(),
  rootKey: Joi.string().required().length(8),
  password: Joi.string().required().min(8).max(16),
});

const loginSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8).max(16),
});

const userLoginSchema = Joi.object({
  rootKey: Joi.string().required().length(8),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8).max(16),
});

const validateSuperuserSignup = validator(superuserSignupSchema);
const validateAdminSignupSchema = validator(adminSignupSchema);
const validateLoginSchema = validator(loginSchema);
const validateUserLoginSchema = validator(userLoginSchema);

export {
  validateSuperuserSignup,
  validateAdminSignupSchema,
  validateLoginSchema,
  validateUserLoginSchema,
};
