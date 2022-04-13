import * as mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

export const ChartSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    data: {
        type: Array,
        required: true,
    },
  },
  {
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);
