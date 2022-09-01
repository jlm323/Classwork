let quotes = [
    `I live my life a quarter mile at a time`,
    `I said a ten-second car, not a ten-minute car`,
    `You can have any brew you want... as long as it's a Corona.`,
    `You almost had me? You never had me - you never had your car!`,
    `I don't have friends. I have family.`,
    `It don't matter if you win by an inch or a mile. Winning's winning.`
  ];
  
  document.addEventListener("DOMContentLoaded", function(event) {
    // Random quote of the day generator
    const randomQuote = function() {
      document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
    };
    randomQuote();
    
    // Do all of your work inside the document.addEventListener  
 
    // Part 1
        let mainTitle = document.getElementById("main-title");
        mainTitle.innerHTML = `<h1>Family</h1>`;


  
    // Part 2
        let bodyEl = document.querySelector("body");
        bodyEl.style.backgroundColor = "lightblue";


  
   // Part 3
        let list = document.querySelectorAll("#favorite-things li");
        list[list.length-1].remove();


 
    // Part 4
        let special = document.getElementsByClassName("special-title");
        for (let i = 0; i < special.length; i++) {
            special[i].style.fontSize = '2rem';
            special[i].style.color = 'lime';
        }
                

 
    // Part 5
        let races = document.querySelectorAll("#past-races li");  
        // races[3].remove();  

        for (let i = 0; i < races.length; i++) {
            if (races[i].textContent == "Chicago") {
                races[i].remove("Chicago");
            }
        }



    // Part 6
        let newLi = document.createElement("li");
        newLi.innerText = "Miami";
        let past = document.getElementById("past-races");
        past.appendChild(newLi);
 


    // Part 7
        let newDiv = document.createElement("div");
        newDiv.classList.add("blog-post", "purple");

        let newH2 = document.createElement("h1");
        
        let newPg = document.createElement("p");
        
        let mainBlog = document.getElementsByClassName("main");

        newDiv.appendChild(newH2);
        newDiv.appendChild(newPg);
        
        newH2.innerText = "Miami";
        newPg.innerText = "I DROVE MY CAR ON THE BEACH!";

        mainBlog[0].appendChild(newDiv);
        // console.log(mainBlog[0])

 

    // Part 8
        let randomClick = document.getElementById("quote-title");
        randomClick.addEventListener('click', function(){
            randomQuote();
        });
        

 
    // Part 9
        let blogEl = document.querySelectorAll(".blog-post");

        for (let i = 0; i < blogEl.length; i++) {
            
            blogEl[i].addEventListener('mouseout', (event) => {
                blogEl[i].classList.toggle("purple");
            });

            blogEl[i].addEventListener('mouseenter', (event) => {
                blogEl[i].classList.toggle("red");
            });
        }


  });