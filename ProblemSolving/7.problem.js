/*
Write a function called calculateAge that takes a birth year, month, and date as arguments and returns the age of a person in years. 
The function should handle cases where the current date is considered against the provided birthdate.

console.log(calculateAge(1990, 5, 15)); // Output: 31 (assuming the current date is after May 15, 2021)
console.log(calculateAge(2005, 10, 3));

*/

const calculateAge = (date, month, year) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const personAgeYear = currentYear - year;
  const personAgeMonth = month - currentMonth;
  const personAgeDay = currentDay - date;

  //handling negative input values
  if (personAgeDay < 0) {
    personAgeMonth -= 1;
    personAgeDay += new Date(currentYear, currentMonth, 0).getDate();
  }
  if (personAgeMonth < 0) {
    personAgeYear -= 1;
    personAgeMonth += 12;
  }

  return `Your age ${personAgeYear} year , ${personAgeMonth} month , ${personAgeDay} days`;
};

const result = calculateAge(12, 1, 2006);
console.log(result);
