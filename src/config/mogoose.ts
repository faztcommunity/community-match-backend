import mongoose from "mongoose";

(async () => {
  const db = await mongoose.connect(`mongodb://mongo/match`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  });
  console.log("Db is connected to", db.connection.name);
})();
