const express = require("express");
const { handleServerErrors } = require("./errors/error-handling");
const { getAllSupporters } = require("./controllers/supporters.controller");
const {
  getAllDonations,
  getDonationsBySupporter,
} = require("./controllers/donations.controller");

const app = express();

app.use(express.json());

app.get("/supporters", getAllSupporters);

app.get("/donations", getAllDonations);

app.get("/supporter-donations", getDonationsBySupporter);

app.use(handleServerErrors);

module.exports = app;
