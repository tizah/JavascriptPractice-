const moment = require("moment");

let year = 2019;
let month = 0;
let startDate = "";
let endDate = "";

const monthsInYear = [];

while (month < 12) {
  let isLeapYear = moment([year]).isLeapYear();

  startDate = moment([year, month]).startOf("month");

  endDate = moment([year, month]).endOf("month");

  monthsInYear.push({
    start: moment(startDate).format("YYYY-MM-DD"),
    end: moment(endDate).format("YYYY-MM-DD"),
    name: moment(startDate)
      .add(7, "days")
      .format("MMMM")
  });

  month++;
}

console.log(monthsInYear);
return monthsInYear;
