const {
  selectAllDonations,
  selectDonationsBySupporter,
} = require("../models/donations.model");

exports.getAllDonations = (_, res, next) => {
  return selectAllDonations()
    .then((donations) => {
      res.status(200).send({ donations: donations.data });
    })
    .catch(next);
};

exports.getDonationsBySupporter = (_, res, next) => {
  return selectDonationsBySupporter()
    .then((supporters) => {
      res.status(200).send({ supporters });
    })
    .catch(next);
};
