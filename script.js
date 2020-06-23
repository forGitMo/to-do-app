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


const todoListElements = document.getElementsByClassName("list");


function generateTodoElement(textParameter) {    
    const card = document.createElement("div");
    const liTi = document.createElement("div");
    liTi.classList.add('list-item');
    const liDe = document.createElement("div"); 
    liDe.classList.add('list-description');
    
    liTi.appendChild(generateTodoInfo());
    liDe.appendChild(generateTodoDes());
    liTi.appendChild(liDe);
    card.appendChild(liTi);
    
    return card;
}

function generateTodoInfo(){
    const infoEl = createElementWithClass("div","list-info");
    const title = createElementWithClass("h3","title");
    const titleText = document.createTextNode("codeing");
    const date = createElementWithClass("p","day");
    const dateText = document.createTextNode("Monday");
    const time = createElementWithClass("p","time");
    const timeText = document.createTextNode("13:00 Uhr");
    title.appendChild(titleText);
    infoEl.appendChild(title);
    date.appendChild(dateText);
    infoEl.appendChild(date);
    time.appendChild(timeText);
    infoEl.appendChild(time);
    return infoEl;
}

/**** description wird außherhalb des list-item erzeugt. */
const beschreibung = "lorem Exkalibur";


function generateTodoDes (){
    const infoEl =createElementWithClass("div","list-description")
    const listDescription = createElementWithClass("p", "description");
    const desText = document.createTextNode(beschreibung);
    listDescription.appendChild(desText);
    infoEl.appendChild(listDescription);
    return infoEl;
}

function createElementWithClass(elementtype, elementclass){
    const infoEl = document.createElement(elementtype);
    infoEl.classList.add(elementclass); 
    return infoEl;
}

let counter = 0;

if (buttonElements.length > 0){
    const singleButton = buttonElements[0];
    singleButton.addEventListener('click', function(event){
        event.preventDefault();
        counter = counter + 1;
        if (todoListElements.length){
            todoListElements[0].appendChild(generateTodoElement( + counter));
        }
    })
}

