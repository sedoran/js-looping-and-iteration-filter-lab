// Code your solution in this file
function findMatching(drivers, name) {
  let nameList = []

  for (const driver of drivers) {
    if (driver.toLowerCase() === name.toLowerCase() ) {
      nameList.push(driver)
    }
  }

  return nameList
}

function fuzzyMatch(drivers, subString) {
  let nameList = []

  for(const driver of drivers) {
    if (driver.substring(0,subString.length) === subString) {
      nameList.push(driver)
    }
  }

  return nameList
}

function matchName(drivers, name) {
  let nameList = []

  for(const driver of drivers) {
    if (driver.name === name) {
      nameList.push(driver)
    }
  }

  return nameList
}