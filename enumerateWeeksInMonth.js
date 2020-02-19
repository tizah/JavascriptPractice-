const moment = require("moment");

//jan
let startDate = "2019-01-01";

let endWeekInYear = "2019-01-31";

//feb
// let startDate = "2020-02-01";

// let endWeekInYear = "2020-02-29";

//mar
// let startDate = "2020-03-01";

// let endWeekInYear = "2020-03-31";

//Aug
// let startDate = "2020-08-01";

// let endWeekInYear = "2020-08-31";

//Nov
// let startDate = "2020-11-01";

// let endWeekInYear = "2020-11-30";

//Dec
// let startDate = "2020-12-01";

// let endWeekInYear = "2020-12-31";

let days = new Date(startDate);
let numdays = days.getDay();
let addDays = 0;
if (numdays !== 1) {
  if (numdays === 0) {
    addDays = 1;
  } else if (numdays === 1) {
    addDays = 7;
  } else if (numdays === 2) {
    addDays = 6;
  } else if (numdays === 3) {
    addDays = 5;
  } else if (numdays === 4) {
    addDays = 4;
  } else if (numdays === 5) {
    addDays = 3;
  } else {
    addDays = 2;
  }
} else {
  addDays = 0;
}

console.log(addDays);

// You can increase the finalEndDate
const finalEndDate = moment(new Date(endWeekInYear))
  .endOf("week")
  .format("YYYY-MM-DD");

const weeks = [];
while (startDate < endWeekInYear) {
  const endDate = moment(startDate)
    .endOf("week")
    .subtract(1, "days")
    .format("YYYY-MM-DD");

  let label = `WK ${moment(startDate).week()}`;

  if (addDays === 2 || addDays === 1) {
  } else {
    weeks.push({ start: startDate, end: endDate, label });
  }

  let idays = new Date(startDate);
  let inumdays = idays.getDay();

  startDate = moment(startDate)
    .add(addDays, "days")
    .format("YYYY-MM-DD");
  addDays = 7;

  console.log(
    startDate +
      " >>> start date >>>" +
      (startDate === endWeekInYear && inumdays === 1)
  );
  if (startDate === endWeekInYear && inumdays === 1) {
    label = `WK ${moment(startDate).week()}`;
    weeks.push({ start: startDate, end: startDate, label });
    console.log("we are in");
  }

  // console.log(addDays);
  // console.log(startDate);
  // console.log(label);
}

console.log(weeks);
console.log(
  moment(startDate)
    .startOf("month")
    .format("YYYY-MM-DD")
);

console.log(
  moment(startDate)
    .endOf("month")
    .add(1, "days")
    .format("YYYY-MM-DD")
);
return weeks;
