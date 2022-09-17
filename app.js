const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const nunjucks = require("nunjunks");
const dotenv = require("dotenv");

dotenv.config();
const pageRouter = require("/routes/page");
const { json } = require("sequelize");

const app = exrpess();
app.set("port", process.env.PORT || 8001);
app.set("view engine", "html");
nunjunks.configure("views", {
  express: app,
  watch: true,
});

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(porcess.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: Process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);
