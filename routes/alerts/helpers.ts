import * as StandardError from 'standard-error';
import * as status from 'http-status';
import * as Joi from 'joi';

// Internal Dependencies
import { Alert } from "../../db";
export class AlertHelpers {
  public static findAll = async (query) => {
    const page = Number(query.page) || 1;
    const limit = Number(query.pageSize) || 5;
    const skips = (page - 1) * limit;

    return await Alert.aggregate([
      {
        $match: {
          isDeleted: false,
        },
      },

      {
        $facet: {
          data: [
            {
              $skip: skips,
            },
            {
              $limit: limit,
            },
          ],
          count: [
            {
              $count: "count",
            },
          ],
        },
      },
    ]);
  };

  public static findAndUpdate = async ({ id, update }) => {
    return await Alert.findByIdAndUpdate(id, update, {
      new: true,
    });
  };
  public static create = async (document) => {
    return await Alert.create(document);
  };
  public static softDelete = async (id) => {
    const data = await Alert.findByIdAndUpdate(id, {
      isDeleted: true,
    });
    return data;
  };
}

export const ValidateAlertFeilds = (feilds) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    priceSignal: Joi.string().required(),
    criteria: Joi.string().required(),
    value: Joi.string().required(),
    activeDays: Joi.string().required()
  })

  const validation = schema.validate(feilds);
  if(validation.error?.details[0]){
    throw new StandardError({ message: validation.error.details[0].message, code: status.CONFLICT })
  }
}
