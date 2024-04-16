const mongoose = require("mongoose");

const mongoUri = process.env.MONGODB;

function initializeDatabase() {
  try {
    const connection = mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    if (connection) {
      console.log("connected Successfully");
    }
  } catch (error) {
    console.log("Connection Failed", error);
  }
}

module.exports = { initializeDatabase };
