// Set your variables
let cities = []
let user_input = ""
let doneWithCities = false
let i = 0
let message = ""
let message2 = ""

// First while loop
while (doneWithCities === false) {
  user_input = prompt('Type in a city. When you are done inputting cities, type: STOP')
  if (user_input == "STOP"){
    doneWithCities = true
  } else {
    cities.push(user_input)
    doneWithCities = false
  }
}
  
// Second loop  
while (i <= cities.length) {
  console.log(cities[i].toLowerCase())
  i++;
}
  