import Fuse from 'fuse.js';

let titleDom = document.querySelector(".usTitle");
let foodTitleDom = document.querySelector(".fTitle");
let cardDom = document.querySelector("#card");
let searchFood = document.getElementsByClassName("searchInput");



fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json()).then(userData => {
        titleDom.innerText = `Merhaba ${userData.name}, Hoşgeldin!`
    })


fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then(data => {
        data.forEach(element => {
            const newDiv = document.createElement('div')
            newDiv.classList.add("col-5", "text-center", "mt-5",);
            const newE = document.createElement('h5');
            newE.classList.add("text-center")
            const buttonFav = document.createElement('button')
            buttonFav.classList.add("text-center")

            newE.innerHTML = element['title']
            buttonFav.innerHTML = "Favorile"

            cardDom.append(newDiv);
            newDiv.appendChild(newE)
            newDiv.appendChild(buttonFav)
        });
    })








