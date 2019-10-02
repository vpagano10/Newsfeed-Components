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

const headerMenu = document.querySelector(".header");

function createMenu() {
  const hamburger = document.createElement("div");
  const list = document.createElement("ul");
  const option1 = document.createElement("li");
  const option2 = document.createElement("li");
  const option3 = document.createElement("li");
  const option4 = document.createElement("li");
  const option5 = document.createElement("li");
  const option6 = document.createElement("li");

  hamburger.appendChild(list);
  list.appendChild(option1);
  list.appendChild(option2);
  list.appendChild(option3);
  list.appendChild(option4);
  list.appendChild(option5);
  list.appendChild(option6);

  hamburger.classList.add("menu");

  option1.textContent = menuItems[0];
  option2.textContent = menuItems[1];
  option3.textContent = menuItems[2];
  option4.textContent = menuItems[3];
  option5.textContent = menuItems[4];
  option6.textContent = menuItems[5];

  hamburger.addEventListener("click", (e) => {
    hamburger.classList.toggle("menu--open");
  });
  return hamburger;
}

headerMenu.appendChild(createMenu());
