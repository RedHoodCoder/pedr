// lasagna.js

const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}

function totalTimeInMinutes(numberOfLayers, actualMinutesInOven) {
  return (numberOfLayers * 2) + actualMinutesInOven;
}

export {
  EXPECTED_MINUTES_IN_OVEN,
  remainingMinutesInOven,
  preparationTimeInMinutes,
  totalTimeInMinutes
};
