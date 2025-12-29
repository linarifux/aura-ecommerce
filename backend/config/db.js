const mongoose = require("mongoose");
const { DB_NAME } = require("./constants");

const connectDB = async () => {
  try {
    // Attempt to connect to the database
    const conn = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;