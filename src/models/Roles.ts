import { Document, model, Schema } from "mongoose";

interface IRole extends Document {
  name: string;
}

const roleSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    versionKey: false,
  }
);

export default model<IRole>("Role", roleSchema);
