import * as StandardError from 'standard-error';
import * as status from 'http-status';
import * as Joi from 'joi';

export const getJwtPayload = (user) => {
  return {
    valid: true,
    id: user._id,
  };
};

export const validateRegisterFields = (feilds) => {
  const schema = Joi.object({
    name: Joi.object({
      first: Joi.string().min(3).required(),
      last: Joi.string().min(3).required()
    }).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  })

  const validation = schema.validate(feilds);
  if(validation.error?.details[0]){
    throw new StandardError({ message: validation.error.details[0].message, code: status.CONFLICT })
  }
};

export const validateloginFields = (feilds) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  })

  const validation = schema.validate(feilds);
  if(validation.error?.details[0]){
    throw new StandardError({ message: validation.error.details[0].message, code: status.CONFLICT })
  }
};
