const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const routes = require("./src/routes/weather");
require("dotenv").config();

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ehuyon2.mongodb.net/?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 3000;
async function connect() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Connected to Mongo");
  } catch (e) {
    console.log(e);
  }
}

connect();
app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
