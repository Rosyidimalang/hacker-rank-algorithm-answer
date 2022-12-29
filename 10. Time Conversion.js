// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
// - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

function timeConversion(s) {
  const hour = s.substring(0, 2);
  let newHour = hour;
  const time = s.substring(s.length - 2, s.length);

  if (time === "PM") {
    newHour = hour != 12 ? parseInt(hour) + 12 : hour;
  } else if (time == "AM") {
    newHour = hour == 12 ? "00" : hour;
  }
  newHour += s.substring(2, s.length - 2);
  return newHour;
}
let time = "12:40:22AM";
console.log(timeConversion(time));
