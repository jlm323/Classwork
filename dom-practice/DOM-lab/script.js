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

  if (event.target.tagName != 'A'){
    return;
  }
  console.log(event.target);

  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }

  for (i = 0; i < topMenuLinks.length; i++) {
    topMenuLinks[i].classList.remove('active');
  }
  event.target.classList.add('active');

   let activeLink 
  for (i = 0; i < menuLinks.length; i++) {
    if (event.target.text == menuLinks[i].text) {
      activeLink = menuLinks[i]
    }
  } 
  if (activeLink['subLinks']) {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }
  
  const buildSubMenu = function(obj) {
    while (subMenuEl.firstChild) {
      subMenuEl.removeChild(subMenuEl.firstChild);
    }

    for(let i = 0; i < obj.subLinks.length; i++) {
      let link = document.createElement('a');
      link.href = obj.subLinks[i].href;
      link.innerText = obj.subLinks[i].text;
      subMenuEl.appendChild(link);
    }
    }
  

  if (showingSubMenu === true) {
      buildSubMenu(activeLink)
      subMenuEl.style.top = '100%';
  } else if (showingSubMenu === false) {
    subMenuEl.style.top = '0';
  }
  
});



 subMenuEl.addEventListener('click', function(event) {
    event.preventDefault();
    if (event.target.tagName != 'A') {
      return;
    }

    showingSubMenu = false;
    subMenuEl.style.top = '0';

    for (let i = 0; i < topMenuLinks.length; i++) {
      topMenuLinks[i].classList.remove('active');
    }
    
    mainEl.innerText = `<h1>${event.target.text}</h1>`;
  })
