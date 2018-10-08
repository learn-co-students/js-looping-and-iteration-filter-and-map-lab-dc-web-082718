function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue
  }
)
}

function driverNamesWithRevenueOver(drivers, revenue) {
  newArray = [];
  drivers.filter(function(driver) {
    if (driver.revenue > revenue)
    newArray.push(driver.name)
  })
  return newArray;
}

// function exactMatch(drivers, matcher) {
//   return drivers.filter(function(driver) {
//     let matches = false;
//
//     for (cosnt key in matcher) {
//       matches = driver[key] === matcher[key];
//     }
//
//     return matches;
//   }
// }
function exactMatch (drivers, matcher) {
  return drivers.filter(function (driver) {
    let matches = false;

    for (const key in matcher) {
      matches = driver[key] === matcher[key];
    }

    return matches;
  });
}

function exactMatchToList(drivers, matcher) {
  return exactMatch(drivers, matcher)
    .map(function(driver) {
      return driver.name;
    }
  );
}
