import { Tache } from "./task.js";
function task(e) {
    e.preventDefault();
    let ul = document.querySelector('.todo');

    let li = document.createElement("li");

    li.classList.add("ajout");

    ul.appendChild(li);

    let button = document.querySelector('form .submit');

    let valueInput = document.getElementById("tache").value;

    button.addEventListener('click', function(){
        li.innerText = valueInput;
    })

}
window.addEventListener("DOMContentLoaded", function(){
  task();  
})