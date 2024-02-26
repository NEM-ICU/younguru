import Joi from "joi";

const validator = (schema) => (payload) =>
  schema.validate(payload, { abortEarly: false });

const rootSignupSchema = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8).max(16),
});

const adminOrEditorSignupSchema = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().required().email(),
  role: Joi.string().required(),
  password: Joi.string().required().min(8).max(16),
});

const studentSignupSchema = Joi.object({
  name: Joi.string().required().min(3),
  email: Joi.string().required().email(),
  classCode: Joi.string().required().length(8),
  password: Joi.string().required().min(8).max(16),
});

const loginSchema = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8).max(16),
});

const userLoginSchema = Joi.object({
  rootKey: Joi.string().length(8),
  classCode: Joi.string().length(8),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8).max(16),
});

const adminLoginSchema = Joi.object({
  rootKey: Joi.string().required().length(8),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(8).max(16),
});

const classSchema = Joi.object({
  batch: Joi.string().required(),
  className: Joi.string().required().min(5),
  institute: Joi.string().required(),
  description: Joi.string(),
});

const validateRootSignup = validator(rootSignupSchema);
const validateAdminOrEditorSignupSchema = validator(adminOrEditorSignupSchema);
const validateStudentSignUpSchema = validator(studentSignupSchema);
const validateLoginSchema = validator(loginSchema);
const validateUserLoginSchema = validator(userLoginSchema);
const validateAdminLoginSchema = validator(adminLoginSchema);
const validateClassSchema = validator(classSchema);

export {
  validateRootSignup,
  validateAdminOrEditorSignupSchema,
  validateStudentSignUpSchema,
  validateLoginSchema,
  validateAdminLoginSchema,
  validateUserLoginSchema,
  validateClassSchema,
};
