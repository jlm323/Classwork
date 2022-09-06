let modal = document.getElementById("modal");

let btn = document.getElementById("clickhere");

let close = document.getElementsByClassName("close")[0];

btn.addEventListener("click", function(event) {
    modal.style.display = "block";
})

close.addEventListener("click", function(event) {
    modal.style.display = "none";
})

window.addEventListener("click", function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
})