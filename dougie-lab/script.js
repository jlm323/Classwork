let container = document.getElementById("container")
let buttons = document.querySelectorAll("button")
let input = document.querySelector("input")
let crime = document.querySelector("crime")

container.addEventListener("click", (e) => { 
    if (e.target.classList.contains("button")) {
        query(e)
    }
})

function query(event) {

    console.log(event)
    // use this variable to store the value of the current borough (as a string)
    // EXAMPLE: let borough = "BRONX"
    let borough = event.target.innerHTML;
    console.log(Number(input.value))
    // use this variable to store the number of results the user requested (as a string or number)
    // EXAMPLE: let numOfResults = 5
    let numOfResults = Number(input.value);
    // console.log(event)
  
    // leave the next four lines alone 
    // in a nutshell, we make a request to a free and public api that handles NYPD data 
    // and it eventually gives us back an object (JSON) to deal with 
    
    let api = `https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&borough=${borough.toUpperCase()}&$limit=${numOfResults}`
  
    fetch(api)
      .then((data) => data.json())
      .then((json) => showResults(json));
  }
  
  
  // you'll do most of your DOM Manipulation in this function
  function showResults(complaints) {
    complaints.forEach(item => {
        let h3 = document.createElement("h3")
        h3.textContent = item.borough;
        let p = document.createElement("p")
        p.textContent = item.descriptor;
        let btn = document.createElement("button")
        let btnP = document.createElement("p")
        btnP.classList.add("hidden")
        btnP.textContent = item.resolution_description;
        console.log(item)
    })
    
    
    console.log(complaints)
  }