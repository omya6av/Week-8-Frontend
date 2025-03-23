

function isLeapYear(year) {
    if (year.toString().length === 4) {
      if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " is a Leap Year");
      } else {
        console.log(year + " is Not a Leap Year");
      }
    } else {
      console.log("Invalid Input! Please enter a 4-digit year.");
    }
  }
  
  const year = parseInt(process.argv[2]);
  isLeapYear(year);
  
