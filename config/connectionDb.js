const mongoose = require("mongoose");

const connectDB = async () => {
  const connect = await mongoose
    .connect(process.env.CONNECTION_STRING)
    .then((re) => {
      console.log(
        `MongoDB Connected: ${(re.connection.host, re.connection.name)}`
      );
    })
    .catch((err) => {
      console.error(`Error connecting to MongoDB: ${err.message}`);
      process.exit(1);
    });
};

module.exports = connectDB;
