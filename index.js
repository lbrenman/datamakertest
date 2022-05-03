let dataConfig = {
  dataMin: 10,
  dataMax: 4000,
  dataVal: 0,
  intervalMin: 0,
  intervalMax: 100,
  intervalVal: 0,
  numRuns: 0,
  firstRun: true
}

function randBetweenMinMax(min, max) {
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}

console.log('Start ....');

let config = {};
let counter = 0;
let value = 0;

while(1) {
  // read config
  config = dataConfig;

  // check for first run
  // if first run, then set numRuns to 0, set intervalVal and set dataVal
  if(config.firstRun) {
    // unset firstRun
    config.firstRun = false;
    config.numRuns = 0;
    config.intervalVal = randBetweenMinMax(dataConfig.intervalMin,dataConfig.intervalMax);
    config.dataVal = randBetweenMinMax(dataConfig.dataMin,dataConfig.dataMax);
  }

  // read value
  value = dataConfig.dataVal;

  config.numRuns += 1;

  if(config.numRuns >= config.intervalVal) {
    // set new values and reset numRuns
    config.numRuns = 0;
    config.intervalVal = randBetweenMinMax(dataConfig.intervalMin,dataConfig.intervalMax);
    config.dataVal = randBetweenMinMax(dataConfig.dataMin,dataConfig.dataMax);
  }

  console.log(value);

}

console.log('.... End');
