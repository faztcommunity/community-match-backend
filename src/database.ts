import mongoose from "mongoose";

const URI = process.env.MONGODB_URI || "mongodb://localhost/match" //get URI from the env file or use this as the default

mongoose.connect(URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
})

mongoose.connection.once("open", () => {
  console.log("DB is connected");
})

