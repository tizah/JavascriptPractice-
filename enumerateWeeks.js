const moment = require("moment");

let startDate = "2020-05-31";
//let firstDateOfMonth = "2020-01-01";
let endWeekInYear = "2020-07-03";
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

if (moment(weeks[0].start).month() !== moment(weeks[0].end).month()) {
  if(moment(weeks[0].start).format("DD") !== "01"){
    weeks[0].start = moment(weeks[0].end)
    .startOf("month")
    .format("YYYY-MM-DD");
}
  }else{

  }
  weeks[0].start = moment(weeks[0].end)
    .startOf("month")
    .format("YYYY-MM-DD");
}

if (
  moment(weeks[weeks.length - 1].start).month() !==
  moment(weeks[weeks.length - 1].end).month()
) {
  weeks[weeks.length - 1].end = moment(weeks[weeks.length - 1].start)
    .endOf("month")
    .format("YYYY-MM-DD");
}
console.log(moment(weeks[0].start).format("DD") === "01");
console.log(weeks);
return weeks;
