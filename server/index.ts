require("dotenv").config();
import express = require("express");
import session = require("express-session");
import massive = require("massive");

// Create a new express application instance
const app: express.Application = express();

// dotenv
const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => {`SERVER PORT listening on:${SERVER_PORT}`});
