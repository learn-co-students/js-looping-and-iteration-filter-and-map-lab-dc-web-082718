// Code your solution here:
function driversWithRevenueOver(list, revenue) {
  return list.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(list, revenue) {
  return driversWithRevenueOver(list, revenue)
  .map(function (driver)
  {return driver.name
  })
}

function exactMatch(list, matchObj) {
  return list.filter( driver => driver[Object.keys(matchObj)[0]] == Object.values(matchObj)[0])
}

function exactMatchToList(list, matchObj) {
  const result = exactMatch(list, matchObj)
  return result.map(driver => driver.name)
}
