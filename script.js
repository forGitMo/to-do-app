/*const i = 0;

do {
    const key = prompt("key = 101!")
    if(key == "101"){
        i ++;
        alert("Willkommen");
    }else {
        alert ("error 404; key not found");
    }
} while (i < 1);
*/

const buttonElements = document.getElementsByClassName("btn");


Array.from(buttonElements).forEach(element => {

    element.addEventListener('mouseover', function (){
        element.style.backgroundColor = 'red'; 
    })
    element.addEventListener('mouseleave', function (){
        element.style.backgroundColor ="green";
    })
});

document.body.onload = addElement;

function addElement () { 
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(newContent);  

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}


const todoListElements = document.getElementsByClassName("list-info");

function generateTodoElement(textParameter) {
    const liTi = document.createElement("h3");
    liTi.classList.add('title');
    const textEle = document.createTextNode(textParameter);
    liTi.appendChild(textEle);
    return liTi;
}

let counter = 0;

if (buttonElements.length > 0){
    const singleButton = buttonElements[0];
    singleButton.addEventListener('click', function(event){
        counter = counter + 1;
        if (todoListElements.length){
            todoListElements[0].appendChild(generateTodoElement('codeing ' + counter));
        }
    })
}

