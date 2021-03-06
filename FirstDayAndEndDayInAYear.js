const moment = require("moment");

let year = 2018;
let month = 0;
let startDate = "";
let endDate = "";

const monthsInYear = [];

while (month < 12) {
  let isLeapYear = moment([year]).isLeapYear();

  if (isLeapYear) {
    if (month > 0) {
      startDate = moment([year, month])
        .startOf("month")
        .isoWeekday(1)
        .add(7, "days");
    } else {
      startDate = moment([year, month])
        .startOf("month")
        .isoWeekday(1);
    }

    endDate = moment([year, month])
      .endOf("month")
      .isoWeekday(1)
      .add(5, "days")
      .subtract(1, "days");
  } else {
    startDate = moment([year, month])
      .startOf("month")
      .isoWeekday(1);

    endDate = moment([year, month])
      .endOf("month")
      .isoWeekday(1)
      .subtract(7, "days");
  }
  monthsInYear.push({
    start: moment(startDate).format("YYYY-MM-DD"),
    end: moment(endDate).format("YYYY-MM-DD"),
    name: moment(startDate)
      .add(4, "days")
      .format("MMMM")
  });

  month++;
}

// console.log(monthsInYear);
// console.log(monthsInYear.length - 1);
// console.log([
//   {
//     year: year,
//     startWeekInYear: moment(monthsInYear[0].start).format("YYYY-MM-DD"),
//     endWeekInYear: moment(monthsInYear[11].end).format("YYYY-MM-DD")
//   }
// ]);
var newArray = [];
newArray.push({
  year: year,
  startWeekInYear: moment(monthsInYear[0].start).format("YYYY-MM-DD"),
  endWeekInYear: moment(monthsInYear[11].end).format("YYYY-MM-DD")
});
console.log(newArray);
return newArray;
