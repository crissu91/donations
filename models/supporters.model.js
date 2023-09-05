const axios = require("axios");

exports.selectAllSupporters = async () => {
  const result = await axios.get(
    "https://www.few-far.co/api/techtest/v1/supporters"
  );
  return result.data.data;
};
