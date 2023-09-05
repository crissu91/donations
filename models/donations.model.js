const axios = require("axios");
const { selectAllSupporters } = require("./supporters.model");

const selectAllDonationsUrl = () => {
  return axios
    .post("https://www.few-far.co/api/techtest/v1/donations_exports")
    .then((res) => res.data.url);
};

exports.selectAllDonations = async () => {
  const url = await selectAllDonationsUrl();

  const requestExport = async () => {
    const response = await axios.get(url);
    if (response.data.status !== "ready") {
      return new Promise((resolve) => {
        setTimeout(async () => {
          resolve(await requestExport());
        }, 6000);
      });
    } else {
      return response.data;
    }
  };
  return await requestExport();
};

exports.selectDonationsBySupporter = () => {
  return Promise.all([this.selectAllDonations(), selectAllSupporters()])
      .then(([resultDonations, resultSupporters]) => {
      const supportersWithDonations = resultSupporters.reduce(
        (result, supporter) => {
          const supporterDonations = resultDonations.data.filter(
            (donation) => donation.supporter_id === supporter.id
          );
          const totalDonations = resultDonations.data.reduce((acc, curr) => {
            if (curr.supporter_id === supporter.id) {
              acc += curr.amount;
            }
            return acc;
          }, 0);
          result.push({
            ...supporter,
            donations: supporterDonations,
            totalDonations,
          });
          return result;
        },
        []
      );

      return supportersWithDonations;
    })
    .then((data) => {
      return data;
    });
};
