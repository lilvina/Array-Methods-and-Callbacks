import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
fifaData.forEach((match) => {
  if(match.Year === 2014 && match.Stage === 'Final') {
    console.log(`${match.Year} - ${match.Stage}`)
    console.log(`a) Home team name: `, match["Home Team Name"])
    console.log(`b) Away team name: `, match["Away Team Name"])
    console.log(`c) Home team goals: `, match["Home Team Goals"])
    console.log(`d) Away team goals: `, match["Away Team Goals"])

    const homeGoals = match["Home Team Goals"]
    const awayGoals = match["Away Team Goals"]
    let winner;
    if(homeGoals > awayGoals) {
      winner = match["Home Team Name"]
    } else if(homeGoals < awayGoals){
      winner = match["Away Team Name"]
    } else {
      winner = "It's a tie"
    }

    console.log(`e) Winner: `, winner)
  }
});



/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {

    /* code here */
    return data.filter((game) => {
      return game.Stage === "Final"
    })
};

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals) {

    /* code here */
    return getFinals(fifaData).map((item) => item.Year)
};

console.log(getYears(getFinals));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */

function getWinners(getFinals) {

    /* code here */
    return getFinals(fifaData).map((item) => {
      if(item["Home Team Goals"] > item["Away Team Goals"]) {
        return item["Home Team Name"]
      }
      return item["Away Team Name"]
    })

};

getWinners();

/* Task 5: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!"

Parameters:
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(winners, years) {
  let countries = winners(getFinals)
  let dates = years(getFinals)
  return dates.map((item, i) => `In ${item}, ${countries[i]} won the world cup!`)
};

getWinnersByYear();

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {

    /* code here */
    let totalHome = 0
    let totalAway = 0

    for(let i = 0; i < data.length; i++) {
      totalHome += data[i]["Home Team Goals"]
    }
    let homeAvg = totalHome / data.length
    for(let i = 0; i < data.length; i++) {
      totalAway += data[i]["Away Team Goals"]
    }
    let awayAvg = totalAway / data.length
    return [homeAvg, awayAvg]
};

getAverageGoals();

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had.

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

};

getCountryWins();


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
