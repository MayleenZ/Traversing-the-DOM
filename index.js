//TODO: 1. Create a variable named (root) and select the html tag from the html file using querySelector

//* add the code here
// console log the root variable
// check the difference between:

const root = document.querySelector("html")
// root.children and root.childNodes
console.log(root);
//The root displays everything it is the parents of everyone and does not have a parent. It is the top node
console.log(root.children);
//this is the children of the root, they are siblings. head and body . Doesnt count the text / spaces
console.log(root.childNodes);
//this includes the head, text and body. It is also displayed in a node list. 


//TODO: 2. Create a variable named (body), using the root array from above assign the body element to the body variable.

//* add the code here
const body = root.childNodes[2]
console.log(body);


//TODO: 3. Create a variable named (h1), using the (body) variable fom above use the property (firstElementChild) to assign the h1 element to the (h1) variable.

//* add the code here
// log the h1 variable to se the result
const h1 = body.firstElementChild
console.log(h1);

const children = body.children;
console.log(children);


//TODO: 4. Create a variable named (ul), using the (h1) variable from above use the (nextElementSibling) property to assign the value to the (ul) variable.

//* add the code here
// Log the ul variable to se the result
const ul = h1.nextElementSibling
console.log(ul);

//Here we are targeting the next sibling which is h2 I added afterwards
const h2 = ul.nextElementSibling
console.log(h2);

//TODO: 5. Create a variable named (thirdLi), using the (ul) variable from above use (lastElementChild) property to assign the value to the (thirdLi) variable.

//* add the code here
// Log the text content of the li -> (Third li 🎃)
const thirdLi = ul.lastElementChild
console.log(thirdLi.textContent);


//TODO: 6. Create a variable named (secondLi), using the (thirdLi) variable from above use (previousElementSibling) property to assign the value to the (secondLi) variable.

//* add the code here
// Log the text content of the li -> (Second li ⛄)
const secondLi = thirdLi.previousElementSibling
console.log(secondLi.textContent);


//TODO: 7. Create a variable named (firstLi), using the (thirdLi) variable from above use (previousElementSibling.previousElementSibling) properties to assign the value to the (firstLi) variable.

//* add the code here
// Log the text content of the li -> (First li 🦁)
const firstLi = thirdLi.previousElementSibling.previousElementSibling
console.log(firstLi.textContent);
//*if we have multiple Li's we dont have to say previousElementSibling multiple times we could cache the ul and then use bracket notation to pick from the selection of li array 

//TODO: 8. Finally create a variable named (backToTheUl) using the thirdLi variable from above, use the (parentElement) property to assign th value to the (backToTheUl) variable.

//* add the code here
// Log the backToTheUl -> (ul)
const backToTheUl = thirdLi.parentElement
console.log(backToTheUl);