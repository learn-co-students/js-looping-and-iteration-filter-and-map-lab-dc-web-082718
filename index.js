// Code your solution here:
function driversWithRevenueOver(driverArray, revenue) {
  return driverArray.filter(
    function(d) {
      return d.revenue > revenue
    }
  );
}

function driverNamesWithRevenueOver(driversArray, revenue) {
  const driverHash = driversWithRevenueOver(driversArray, revenue);
  return driverHash.map(x => x.name)
}

function exactMatch(driverArray, object) {
  const key = Object.keys(object)[0]
  const value = Object.values(object)[0]
  return driverArray.filter(
    function(d) {
      return d[key] === value
    }
  );
}

function exactMatchToList(driverArray, object) {
  const driverHash = exactMatch(driverArray, object);
  return driverHash.map( x => x.name )
}
