# State Cities
--------------
Get a list of states or give it a U.S. state, and it will give you an array of all the city names in that state

## Add it

1. $ npm install state-cities --save
```javascript
var stateCities = require('state-cities');
```

## Usage

### Get all U.S. states
```javascript
// Get all states
var states = stateCities.getStates();

### Retrieve an array of all city names for a particular state
```javascript
// Case insensitive
var cities = stateCities.getCities("Montana");
// or 
var cities = stateCities.getCities("North Carolina");
```