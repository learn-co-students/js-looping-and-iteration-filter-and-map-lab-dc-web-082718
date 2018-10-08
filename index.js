// Code your solution here:
function driversWithRevenueOver(driver, revenue){
  return driver.filter(driver => driver.revenue > revenue)
}

function driverNamesWithRevenueOver(driver, revenue){
  let filteredDrivers = driversWithRevenueOver(driver, revenue)

  return filteredDrivers.map(driver => driver.name)
}

function exactMatch(driver, attribute){
  return driver.filter(driver => driver[Object.keys(attribute)[0]] === Object.values(attribute)[0])
}

function exactMatchToList(driver, revenue){
  let filteredDrivers = exactMatch(driver, revenue)

  return filteredDrivers.map(driver => driver.name)
}
