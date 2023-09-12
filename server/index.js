//Main backend file to send data to frontend

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const path=require("path");
const {connectDb, productSend, lunch, breakfast}= require("./productSend");
const { connect } = require("http2");
const staticPath= path.join(__dirname, 'build');
const mongoose= require("mongoose");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticPath));
app.use(express.json());

//Connect to mongoDB
connectDb();
//Send product data to mongodb
productSend();

//API endpoint to fetch breakfast data
app.get('/api/breakfast', async (req, res) => {
  try {
    const items = await breakfast.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

//API endpoint to fetch lunch data
app.get("/api/lunch", async (req, res) => {
  try {
    const items = await lunch.find({});
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log("Server connected on port: " + PORT);
});
