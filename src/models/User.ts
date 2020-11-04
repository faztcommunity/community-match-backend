import { Schema, Document, model } from "mongoose";

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema = new Schema(
  {
    name: {
      required: true,
      type: String,
    },
    email: {
      unique: true,
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      ref: "Role",
      type: Schema.Types.ObjectId,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model<IUser>("User", userSchema);
