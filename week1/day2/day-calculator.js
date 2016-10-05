var date = process.argv[2];
console.log(date);
if (!date) {
  console.log("Please provide a date in the format YYYY/MM/DD");
} else {
  calculateDayInYear(date);
}

function calculateDayInYear(date) {
  var splitDate = date.split('/');
  var year = Number(splitDate[0]);
  var month = Number(splitDate[1]);
  var day = Number(splitDate[2]);
  var febDays = daysInFeb(year);
  var daysInMonth = [31, febDays, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
  } else {
    console.log("Invalid date");
  }

  function validMonth(month) {
    return month && month >= 1 && month < 12;
  }

  function validDay(month, day) {
    return day && day >= 1 && day < daysInMonth[month - 1];
  }

  function calculateDayNumber(month, day) {
    var dayOfYear = 1;

    for (var i = 1; i < month; i++) {
      dayOfYear += daysInMonth[i - 1];
    }

    return dayOfYear;
  }

  function daysInFeb(year) {
    return 28;
  }

  function isLeapYear(year) {
    return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
  }
}

function isMultiple(numerator, denominator) {
  return numerator % denominator === 0;
}