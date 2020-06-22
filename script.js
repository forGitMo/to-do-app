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
    element.addEventListener('click', function (event){
        alert('1');
    })
});

