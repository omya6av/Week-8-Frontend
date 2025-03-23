

function checkDate(day, month) {
    if ((month === 3 && day >= 20) || (month === 4) || (month === 5) || (month === 6 && day <= 20)) {
      console.log("True - Date is in range");
    } else {
      console.log("False - Date is not in range");
    }
  }
  
  const day = parseInt(process.argv[2]);
  const month = parseInt(process.argv[3]);
  
  checkDate(day, month);
  
