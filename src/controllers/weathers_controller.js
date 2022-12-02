const Weather = require("../model/weather");

exports.createWeathers = (req, res) => {
  if (req.headers.main != 123123)
    return res.status(400).json("You can't create weather")
  const {
    country,
    lon,
    lat,
    main,
    description,
    temp,
    feels_like,
    temp_min,
    temp_max,
    pressure,
    humidity,
  } = req.body;

  const weather = new Weather({
    country: country,
    coord: {
      lon: lon,
      lat: lat,
    },
    weather: {
      main: main,
      description: description,
    },
    main: {
      temp: temp,
      feels_like: feels_like,
      temp_min: temp_min,
      temp_max: temp_max,
      pressure: pressure,
      humidity: humidity,
    },
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
