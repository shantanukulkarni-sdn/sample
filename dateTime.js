const moment = require("moment");

const getTodayDate = () => {
  return moment().format("L");
};

const getNextDay = () => {
  return moment().add(1, "day").format("L");
};

const getDateIn_MDY = (date) => {
  return moment(date, "YYYYMMDD").format("l");
};

const getTimeIn_HMS = (time) => {
  return moment(time, "YYYYMMDDhhmmss").format("LTS");
};

module.exports = {
  getTodayDate,
  getNextDay,
  getDateIn_MDY,
  getTimeIn_HMS,
};
