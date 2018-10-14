// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function (elem) {
    if (elem.revenue > revenue) {
      return elem
    }
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  revOver = []
  drivers.map(function (elem) {
    if (elem.revenue > revenue) {
      revOver.push(elem.name)
    }
  })
  return revOver
}

function exactMatch(driversArr, match) {
  let matchKey = Object.keys(match)[0]
  return driversArr.filter(driver => driver[matchKey] == match[matchKey])
}

function exactMatchToList(driversArr, match) {
  let matchKey = Object.keys(match)[0]
  let matchedDrivers = driversArr.filter(driver => driver[matchKey] == match[matchKey])
  return matchedDrivers.map(driver => driver.name)
}
