// var menuLinks = [
//     {text: 'about', href: '/about'},
//     {text: 'catalog', href: '/catalog'},
//     {text: 'orders', href: '/orders'},
//     {text: 'account', href: '/account'},
//   ];


var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

let mainEl = document.querySelector("main")

mainEl.style.backgroundColor = "var(--main-bg)";

mainEl.innerHTML = "<h1>SEI Rocks!</h1>"

mainEl.classList.add("flex-ctr")

let topMenuEl = document.getElementById ("top-menu")

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";
topMenuEl.classList.add("flex-around");

for (link of menuLinks) {
    let linkA = document.createElement("a");
    linkA.setAttribute("href", link.href);
    linkA.innerText = link.text;
    topMenuEl.appendChild(linkA);
}




////////////////////////////////////////
// LAB PART 2
///////////////////////////////////////

let subMenuEl = document.getElementById("sub-menu");

subMenuEl.style.height = '100%';

subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'

subMenuEl.classList.add('flex-around')

subMenuEl.style.position = 'absolute';

subMenuEl.style.top = '0';

let topMenuLinks = document.querySelectorAll('a');

let showingSubMenu = false;

topMenuEl.addEventListener('click', function (event){
  event.preventDefault();
  if (event.target != 'a'){
    return;
  }
  console.log('a')
});


topMenuEl.addEventListener('click', function() {
  if ('a' === active) {

    subMenuEl.style.top = 0;
  } 
})


