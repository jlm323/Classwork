// alert('test');

////////////////////////////////////////////////
// DOM events:
// user moves or clicks the mouse
// user presses a key
// when a form is submitted
// when the page has finished loading or has been resized

// Event listener
// a function, more specifically a callback function that is called when an event fires
// aka event handlers
// 3 diff. approaches for registering event listeners
    // in the HTML (inline):
        // <button id="reset-btn" onclick="reset()">
    // assigning to DOM elements' properties
        // resetBtn.onclick = reset;
    // Calling addEventListener() on a DOM element


// using the HTML approach (onclick="reset()") typically frowned upon b/c it requires that the function be in the global scope. 
// DOM element approach is better, b/c function does not have to be in global scope
// addEventListener approach widely considered to be best practice because flexibility of adding multiple listener functions

// common syntax for registering an event listener for a given event:
// element.addEventListener(<event-name>, <callback>, <use-capture>);
    // event-name: is the name of the event (string)
    // callback: is the function  we want executed when the event happens. it will be passed an event object as an argument
    // use-capture is a boolean and is optional. has to do with event phrases


// things of interest provided by the event object:
    // several ...x and ...y properties that provide where the click occurred
    // the target property which holds a reference to the DOM element that triggered (dispatched) the event
    // note that JS's this keyword within the listener function 


//////////////////////////////////////////////////

// first select the element we want and store it in a variable (btn)
const btn = document.querySelector('button');

// then attach an event listener to that element
btn.addEventListener('click', function(evt) {
    // evt is a special parameter representing the event object
    // the event object has all the info you will ever need about the event that occured and the element that caused it
    console.log(evt);

    // create a new element with document.createElement method
    const li = document.createElement('li')
    console.log(li)

    // select the input element and store it in a variable (input)
    const input = document.querySelector('input');
    console.log(input)

    // for input elements we'll need to access the 'value' 
    console.log(input.value)

    li.textContent = input.value;
    console.log(li.textContent)

    // will be adding the li tag within the ul tag

    // const ul = document.querySelector('ul')
    // ul.appendChild(li)

    document.querySelector('ul').appendChild(li)

    li.addEventListener('click', handleClick)
    function handleClick(event) {
        li.style.color = "green";
        console.log(event);
    }
    
});


// event delegation
    // event bubbling allows us to implement


// select ul tag
const ul = document.querySelector('ul');

// add event listener to our selected ul
ul.addEventListener('click', handleClick) 
    function handleClick(event) {
        console.log('clicked on ul...');
        console.log(event);
        console.log(event.target);
        
    }


    


    // remove event listener:
    //ul.removeEventListener('click', handleClick)

    // inline styling uses camel case


