const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema(
  {
    country: String,
    year: Number,
    month: Number,
    temp: Number,
    humidity: Number,
    rainfall: Number,
    wind_speed: Number
  }
);

module.exports = mongoose.model("Weather7", weatherSchema);