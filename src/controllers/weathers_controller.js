const Weather1 = require("../model/weather1");
const Weather2 = require("../model/weather2");
const Weather3 = require("../model/weather3");
const Weather4 = require("../model/weather4");
const Weather5 = require("../model/weather5");
const Weather6 = require("../model/weather6");
const Weather7 = require("../model/weather7");
const Weather8 = require("../model/weather8");

exports.createWeathers = (req, res) => {
  if (req.headers.main != process.env.KEY_PASS)
    return res.status(400).json("You can't create weather");
  const { country, year, month, temp, humidity, rainfall, wind_speed } =
    req.body;

  const weather = new Weather({
    country: country,
    year: year,
    month: month,
    temp: temp,
    humidity: humidity,
    rainfall: rainfall,
    wind_speed: wind_speed,
  });

  weather.save((error, weather) => {
    if (error) return res.status(400).json({ error });
    if (weather) {
      res.status(201).json({ weather });
    }
  });
};

exports.getWeathers = async (req, res) => {
  try {
    let weathers = [];
    const weather1 = await Weather1.find({});
    const weather2 = await Weather2.find({});
    const weather3 = await Weather3.find({});
    const weather4 = await Weather4.find({});
    const weather5 = await Weather5.find({});
    const weather6 = await Weather6.find({});
    const weather7 = await Weather7.find({});
    const weather8 = await Weather8.find({});
    weathers.push(weather1);
    weathers.push(weather2);
    weathers.push(weather3);
    weathers.push(weather4);
    weathers.push(weather5);
    weathers.push(weather6);
    weathers.push(weather7);
    weathers.push(weather8);
    weathers_flated = weathers.flat();
    res.status(200).json({ weathers_flated });
  } catch (e) {
    res.status(404).json({ e });
  }
};
