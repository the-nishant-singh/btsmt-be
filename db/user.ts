import * as mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

export const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      first: {
        type: String,
        required: true,
      },
      last: {
        type: String,
        required: true,
      },
    },
    password: {
      type: String,
      required: true
    }
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

UserSchema.virtual("fullName").get(function (): string {
  return `${this.name.first} ${this.name.last}`;
});
