/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/


// const headerMenu = document.querySelector(".header");

// function createMenu(text) {
//   const hamburger = document.createElement("div");
//   const list = document.createElement("ul");
//   const option = document.createElement("li");
  
//   hamburger.classList.add("menu");

//   option.textContent = text;

//   hamburger.appendChild(list);
//   list.appendChild(option);

//   hamburger.addEventListener("click", (event) => {
//     hamburger.classList.toggle("menu--open");
//   });

  // for(let i = 0; i < menuItems.length; i++) {
  //   let option = createMenu(menuItems[i])
  //   list.appendChild(option);
  // }

  // menuItems.forEach( (item) => {
  //   let option = createMenu(item);
  //   list.appendChild(option);
  // })

//   menuItems.map( (item) => {
//     let option = createMenu(item);
//     return option;
//   })

//   return hamburger;
// }

// headerMenu.appendChild(createMenu());

// for(let i = 0; i <menuItems.length; i++) {
//   let option = createMenu(menuItems[i])
//   list.appendChild(option);
// }






// const headerMenu = document.querySelector(".header");

// function createMenu() {
//   const menuIcon = document.createElement("div");
//   const list = document.createElement("ul");
//   const option = document.createElement("li");

//   menuIcon.classList.add("menu");

//   menuIcon.appendChild(list);
//   list.appendChild(option);

//   menuItems.forEach( (item) => {
//     let option = menuItems(item);
//     list.appendChild(option);
//   });
  
//   option.textContent = menuItems[i];

//   menuIcon.addEventListener("click", (e) => {
//     console.log("sdad");
//     menuIcon.classList.toggle("menu--open");
//   });
//   return menuIcon;
// }

// headerMenu.appendChild(createMenu());






const headerMenu = document.querySelector(".header");

function createMenu() {
  const menuIcon = document.createElement("div");
  const list = document.createElement("ul");
  const option1 = document.createElement("li");
  const option2 = document.createElement("li");
  const option3 = document.createElement("li");
  const option4 = document.createElement("li");
  const option5 = document.createElement("li");
  const option6 = document.createElement("li");

  menuIcon.appendChild(list);
  list.appendChild(option1);
  list.appendChild(option2);
  list.appendChild(option3);
  list.appendChild(option4);
  list.appendChild(option5);
  list.appendChild(option6);

  menuIcon.classList.add("menu");

  option1.textContent = menuItems[0];
  option2.textContent = menuItems[1];
  option3.textContent = menuItems[2];
  option4.textContent = menuItems[3];
  option5.textContent = menuItems[4];
  option6.textContent = menuItems[5];

  return menuIcon;
}


const menuButton = document.querySelector(".menu-button");

menuButton.addEventListener("click", () => {
  console.log("sdad");
  menu.classList.toggle("menu--open");
});

const menu = createMenu(menuItems);

headerMenu.appendChild(menu);



// function optionCreator(text) {
//   const option = document.createElement('p');

//   option.textContent = 'text';

//   option.addEventListener('click', (event) => {
//     console.log('The option was clicked');
//   })
//   return option;
// }

// for(let i = 0; i < menuItems; i++) {
//   let option = optionCreator(menuItems[i]);
//   console.log(option);
//   topMenu.appendChild(optionCreator());
// }

// let topMenu = document.querySelector('.header');

// topMenu.appendChild(optionCreator());
