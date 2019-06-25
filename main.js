const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

let section = document.createElement("section")
document.body.appendChild(section)
section.setAttribute("id", "planets")

const planetEl = document.getElementById("planets")
planetEl.innerHTML += `<h1>Planets</h1>`
planets.forEach(planet => {
  planetEl.innerHTML += `
  <h3>${planet}</h3>`
})



/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/
let capitalPlanets = planets.map(planet => planet.charAt(0).toUpperCase() + planet.slice(1)) //.charAt(0) selects the first letter to uppercase but you still need to add it to the rest of ther string which is why you concactenate it with planet sliced at the (1) char
console.log(capitalPlanets)

planetEl.innerHTML += `<br><h1>Capital Planets</h1>`
capitalPlanets.forEach(planet => {
  planetEl.innerHTML += `
  <h3>${planet}</h3>`
})
/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/
let ePlanets = planets.filter(planet => planet.includes("e"))
planetEl.innerHTML += `<h1>"e"-Planets</h1>`
ePlanets.forEach(planet => {
  planetEl.innerHTML += `<h3>${planet}</h3>`
})