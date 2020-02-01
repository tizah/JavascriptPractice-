const moment = require("moment");

let year = 2020;
let month = 0;
let startDate = "";
let endDate = "";

const monthsInYear = [];

while (month < 12) {
  let isLeapYear = moment([year]).isLeapYear();

  if (isLeapYear) {
    if (month > 0) {
      startDate = moment([year, month]).startOf("month");
      //  .isoWeekday(1);
      //.add(7, "days");
    } else {
      startDate = moment([year, month]).startOf("month");
      // .isoWeekday(1);
    }

    endDate = moment([year, month]).endOf("month");
    // .isoWeekday(1);
    // .add(5, "days")
    //  .subtract(1, "days");
  } else {
    startDate = moment([year, month]).startOf("month");
    //.isoWeekday(1);

    endDate = moment([year, month]).endOf("month");
    // .isoWeekday(1);
    // .add(4, "days");
  }
  monthsInYear.push({
    start: moment(startDate).format("YYYY-MM-DD"),
    end: moment(endDate).format("YYYY-MM-DD"),
    name: moment(startDate)
      .add(6, "days")
      .format("MMMM")
  });

  month++;
}

console.log(monthsInYear);
return monthsInYear;
