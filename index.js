// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(driver => driver.revenue > revenue);
}

function driverNamesWithRevenueOver(drivers, revenue){
    const newDrivers = driversWithRevenueOver(drivers, revenue);
    return newDrivers.map(driver => driver.name)
}

function exactMatch(drivers, keyValue) {
  return drivers.filter(driver=> driver[Object.keys(keyValue)[0]] == Object.values(keyValue)[0])
}

function exactMatchToList(drivers, keyValue) {
  const newDrivers = exactMatch(drivers, keyValue)
  return newDrivers.map(driver => driver.name)

}
