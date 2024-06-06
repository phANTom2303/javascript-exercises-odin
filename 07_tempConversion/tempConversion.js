const convertToCelsius = function(temp) {
    return Math.round((((5.0)/(9.0))*(temp - 32.0)) * 10) / 10 ;
};

const convertToFahrenheit = function(temp) {
  return Math.round(((9.0*temp)/(5.0) + 32) * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
