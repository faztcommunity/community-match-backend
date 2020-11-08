import mongoose, { ConnectionOptions, Error } from "mongoose";

export class Database {
  private URI: string;
  private options: ConnectionOptions;

  constructor() {
    //get URI from the env file or use this as the default
    this.URI = process.env.MONGODB_URI || "mongodb://localhost/match-db";
    this.options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    };
  }

  async connect(): Promise<void> {
    await mongoose.connect(this.URI, this.options, (error: Error) => {
      if (error) console.log(error.message);
      console.log("DB is connected");
    });
  }
}
