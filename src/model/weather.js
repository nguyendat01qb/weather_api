const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema(
  {
    country: String,
    coord: {
      lon: Number,
      lat: Number
    },
    weather: [
      {
        main: String,
        description: String
      }
    ],
    main: {
      temp: Number,
      feels_like: Number,
      temp_min: Number,
      temp_max: Number,
      pressure: Number,
      humidity: Number
    }
  }
);

module.exports = mongoose.model("Weather", weatherSchema);