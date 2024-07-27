var states = require('./data/states').states;

//Get cities based on a U.S. state input
exports.getCities = function(state) {
  state = state.trim().toUpperCase();
  if(!states[state]) {
    return null;
  } else {
    return states[state].cities;
  }
};

//Get all U.S. states
exports.getStates = function() {
  if(states) {
    return Object.keys(states);
  } else {
    return null;
  }
};