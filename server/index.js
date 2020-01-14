require("dotenv").config();
const express = require("express");
const session = require("express-session");
const massive = require("massive");
const app = express();

// Controllers

// dotenv
const { SERVER_PORT } = process.env;

app.listen(SERVER_PORT, () => { console.log(`SERVER PORT listening on: ${SERVER_PORT}`) }); 