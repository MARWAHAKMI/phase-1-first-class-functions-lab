const returnFirstTwoDrivers = arr => arr.slice(0, 2)
const returnLastTwoDrivers = arr => arr.slice(arr.length - 2)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = num => () => num * num
const fareDoubler = num => num + num
const fareTripler = num => num + num + num
const selectDifferentDrivers = (arr, callback) => callback(arr)

// Executions
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
console.log(returnFirstTwoDrivers(drivers))
console.log(returnLastTwoDrivers(drivers))
console.log(selectingDrivers[0](drivers))
const func = createFareMultiplier(5)
console.log(func(5))
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))
console.log(drivers)