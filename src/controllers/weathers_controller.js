const Weather = require("../model/weather");

exports.createWeathers = (req, res) => {
  if (req.headers.main != process.env.KEY_PASS)
    return res.status(400).json("You can't create weather")
  const {
    country,
    year,
    month,
    temp,
    humidity,
    rainfall,
    wind_speed
  } = req.body;

  const weather = new Weather({
    country: country,
    year: year,
    month: month,
    temp: temp,
    humidity: humidity,
    rainfall: rainfall,
    wind_speed: wind_speed
  });

  weather.save((error, weather) => {
    if (error) return res.status(400).json({ error });
    if (weather) {
      res.status(201).json({ weather });
    }
  });
};

exports.getWeathers = (req, res) => {
  Weather.find({}).exec((error, weather) => {
    if (error) return res.status(400).json({ error });
    if (weather) {
      res.status(200).json(weather);
    }
  });
};
