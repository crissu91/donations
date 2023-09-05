const { selectAllSupporters } = require("../models/supporters.model");

exports.getAllSupporters = (_, res, next) => {
  return selectAllSupporters()
    .then((supporters) => {
      res.status(200).send({ supporters });
    })
    .catch(next);
};
