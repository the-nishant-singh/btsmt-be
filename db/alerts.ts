import * as mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

export const AlertSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    priceSignal: {
      type: String,
      required: true,
    },
    criteria: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    activeDays: {
      type: Array,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
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
