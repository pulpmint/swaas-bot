const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const envCheck = require("./utils/envCheck");

// configure dotenv
dotenv.config({ path: "./.env" });

// check for env variables
envCheck();

// init app
const app = express();

// env
const mongoURI = process.env[`MONGODB_${process.env.NODE_ENV}_URI`];

// init mongoose & start the server
mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(() => {
    console.log(`\n✔️  Connected to ${process.env.NODE_ENV} database`);

    app.listen(5000, () =>
      console.log(`🤖  Server started in ${process.env.NODE_ENV} environtment\n`)
    );
  })
  .catch(err => console.log(err));

// add middlewares
app.use(express.json());
app.use(morgan("tiny"));

// test api
app.get("/", (req, res) => {
  res.status(200).json({ msg: `Server is running` });
});

// 404 api
app.use((req, res) => {
  res.status(404).json({ msg: "Page not found" });
});
