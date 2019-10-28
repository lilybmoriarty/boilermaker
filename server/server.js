"use strict";

const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const session = require("express-session");
const passport = require("passport");
const User = require("./db");

// loggin middleware
app.use(morgan("dev"));

//body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

// setting up session middleware
app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret string",
    resave: false,
    saveUninitialized: false
  })
);

app.use(passport.initialize());
app.use(passport.session());

//serializing and deserializing user

passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

// API routes in api folder
app.use("/api", require("./api"));

// serving up html
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

// error handler - 404 is in router
app.use(function(err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

module.exports = app;
