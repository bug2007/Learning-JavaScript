const now = new Date();

const date1 = new Date('May 11 2018 09:00'); //returns a date object with the specified date and time
const date2 = new Date(2018, 4, 11, 9); // year, month, date of the month, hour. month is zero-based (0-11)

now.getDay(); // returns the day of the week (0-6). 0 is Sunday, 1 is Monday, and so on.

date1.getFullYear(); // returns the year (4 digits)

now.setFullYear(2020); // sets the year to 2020

now.toDateString(); // returns the date in a human-readable format (e.g. "Mon May 11 2020")
now.toTimeString();
now.toISOString(); // returns the date in ISO format (e.g. "2020-05-11T09:00:00.000Z")