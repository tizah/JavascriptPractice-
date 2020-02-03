const moment = require("moment");

let yearArray = ["2016", "2018", "2019", "2020"];
let i = 0;
let yearLength = yearArray.length;
const monthsInYear = [];
while (i < yearLength) {
  let year = yearArray[i];
  let startDate = "";
  let endDate = "";

  let isLeapYear = moment([year]).isLeapYear();

  startDate = moment([year, 0])
    .startOf("month")
    .isoWeekday(1);
  if (isLeapYear) {
    endDate = moment([year, 11])
      .endOf("month")
      .isoWeekday(5);
  } else {
    endDate = moment([year, 11])
      .endOf("month")
      .isoWeekday(5)
      .subtract(7, "days");
  }
  monthsInYear.push({
    year: year,
    startWeekInYear: moment(startDate).format("YYYY-MM-DD"),
    endWeekInYear: moment(endDate).format("YYYY-MM-DD")
  });

  i++;
}
return monthsInYear;
