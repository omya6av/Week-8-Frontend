
function inchesToFeet(inches) {
    return inches / 12;
  }
  
  let inches = 42;
  console.log(`${inches} inches = ${inchesToFeet(inches)} feet`);

  function feetToMeters(feet) {
    return feet * 0.3048;
  }
  
  let lengthFeet = 60;
  let widthFeet = 40;
  
  let lengthMeters = feetToMeters(lengthFeet);
  let widthMeters = feetToMeters(widthFeet);
  console.log(`Rectangular Plot: ${lengthFeet}ft x ${widthFeet}ft = ${lengthMeters.toFixed(2)}m x ${widthMeters.toFixed(2)}m`);
  
//Calculate Area of 25 such plots in Acres
  function squareMetersToAcres(squareMeters) {
    return squareMeters * 0.000247105;
  }
  
  let areaMeters = lengthMeters * widthMeters;
  let totalAreaMeters = areaMeters * 25;
  let totalAreaAcres = squareMetersToAcres(totalAreaMeters);
  
  console.log(`Total area of 25 plots in acres: ${totalAreaAcres.toFixed(4)} acres`);
  