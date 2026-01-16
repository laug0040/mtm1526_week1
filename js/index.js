// console.log("Javascript is wild!");
// alert("Welcome to my Week 1 Client-Side Development Assignment!");

let a = 5
let b = 10

// console.log(a) // 5
// console.log(b) // 10
console.log(a + b) // 15
console.log(a > b) // false
console.log(a < b) // true

// CONCATENATION
console.log('let a = ' + a)
console.log('let b = ' + b)
console.log('a + b = ' + (a + b))
console.log('a > b = ' + (a > b))

// INTERPOLATION
console.log(`let a = ${a}`)
console.log(`a + b = ${a + b}`)
console.log(`a > b = ${a > b}`)

// OPERATORS
let n = 10
n += 1 // n is now 11
console.log(n)
let m = 20
m /= 2 // m is now 10
console.log(m)

// COMPARISON OPERATORS
console.log(a > b) // false
console.log(a < b) // true
console.log(a >= b) // false
console.log(a <= b) // true
console.log(a == b) // false
console.log(a != b) // true
// The reason they are false is because they are not equal, although for true it means they are equal

// EXERCISE
// Declare variable first_name and assign it the value "Nikola"
let first_name = 'Nikola'
// Declare variable last_name and assign it the value "Tesla"
let last_name = 'Tesla'
// Declare variable year and assign it the value 1898
let year = 1898
// Declare variable experiment
let experiment

// Concatenate first_name, last_name, year, and required string literals
// to form the sentence:
// "Nikola Tesla demonstrated wireless data-transfer with
// remotely controlled boat-toy in 1898."

// Assign the result to the variable experiment
experiment = first_name + ' ' + last_name + ' demonstrated wireless data-transfer with remotely controlled boat-toy in ' + year
// Print experiment using alert()
// Print experiment using console.log()
console.log(experiment)