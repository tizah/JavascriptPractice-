const moment = require("moment");

let startDate = "2020-01-01";
let firstDateOfMonth = "2020-01-01";
let endWeekInYear = "2020-12-31";
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

  //litle fix on the class curric app
  if (startDate === firstDateOfMonth) {
    weeks.push({ start: startDate, end: endDate, label });
  } else {
    weeks.push({
      start: moment(startDate)
        .startOf("week")
        .add(1, "days")
        .format("YYYY-MM-DD"),
      end: endDate,
      label
    });
  }
  ///stop of fix on the class curric app
  startDate = moment(startDate)
    .add(7, "days")
    .format("YYYY-MM-DD");
}
console.log(weeks);
return weeks;