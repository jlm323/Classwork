// document (to access the DOM)

// document object has methods we can use to traverse the DOM
// one method is called getElementById
// another is querySelector

let h1Tag = document.getElementById("title");
////////
// styling
////////
h1Tag.style.textAlign = "center";
h1Tag.style.color = "blueViolet";

let aTag = document.querySelector("a");
aTag.setAttribute("href", "https://www.google.com");






// // select an element by its tag name(p)
// chooses the first 
let pTag = document.querySelector("p")
// // let pTag2 = document.getElementById("p")

// // select an element by its id name ("title")
// // let pTag = document.querySelector("#title")
// console.log(pTag)


// console.dir(h1Tag)


// console.log (h1Tag.innerText)

// let pEl = document.querySelector(".cool")
// console.log(pEl)
// console.log(pEl.innerHTML)
// console.log(pE1.textContent)

// console.dir()






// Access the text and innerHTML of an element with:
// textContent
// innerHTML

// The style property (object) can be used to make changes to appearance
// style

// has multiple properties that represent CSS properties
// color
// backgroundColor
// textAlign



pTag.setAttribute("class", "whatever-class-name");

// pTag.classList.add("whatever-class-name")
pTag.classList.remove("whatever-class-name")
// pTag.classList.toggle(className)
// pTag.classList.contai-ns(className)
// pTag.classList.replace(oldClass, newClass)



// selecting multiple elements by tagName
let liTags = document.getElementsByTagName("li")

console.log("by TagName method:", liTags[0])


// selectings multiple elements by className
let liTags2 = document.getElementsByClassName("comment");

console.log("by ClassName method:", liTags2);


// selecting multiple elements by whatever you like
let liTags3 = document.querySelectorAll(".comment")

console.log(liTags3)


// getElementById: use when you need to select a single element that has an id assigned to it
// querySelector: use when you need to select a single element that does not have an id
// querySelectorAll: use when you need to select multiple elements

// querySelectorAll: returns an array-like object 


console.log(liTags3)


// iterate over our array of elements

// with a for of loop:
console.log('looping with for of...')
for (let li of liTags3) {
    console.log(li)
}

// with a regular for loop:
console.log('looping with for loop...')
for (let i = 0; i < liTags3.length; i++) {
    console.log(liTags3[i])
};

console.log('looping with for each...')

// with a forEach:
// liTags3.forEach(element) => console.log(element)

for (let li of liTags) {
    li.style.fontSize ="30px"
    console.log(li)
}
