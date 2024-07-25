
// Code your solution here

// This function takes an array of driver names called drivers and a query string called 'query' as inputs. It then uses the 'filter()' method to create a new array containing only the drivers whose names match the query (case insensitive). The resulting array is then returned.

function findMatching(drivers, query) {
    return drivers.filter((driver) => driver.toLowerCase() === query.toLowerCase());
  }

//  This function takes an array of driver names called drivers and a query string called query as inputs. It then uses the 'filter()' method to create a new array containing only the drivers whose names start with the query (case insensitive). The resulting array is then returned. 
  
function fuzzyMatch(drivers, query) {
    return drivers.filter((driver) => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, query) {
    return drivers.filter((driver) => driver.name === query);
}
  
  