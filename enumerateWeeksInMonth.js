const moment = require("moment");

let startDate = "2020-02-03";

let endWeekInYear = "2020-02-28";
// You can increase the finalEndDate
const finalEndDate = moment(new Date(endWeekInYear))
  .endOf("week")
  .subtract(1, "days")
  .format("YYYY-MM-DD");

const weeks = [];
while (startDate < finalEndDate) {
  const endDate = moment(startDate)
    .endOf("week")
    .subtract(1, "days")
    .format("YYYY-MM-DD");

  const label = `WK ${moment(startDate).week()}`;

  weeks.push({ start: startDate, end: endDate, label });
  startDate = moment(startDate)
    .add(7, "days")
    .format("YYYY-MM-DD");
}

console.log(weeks);
return weeks;
