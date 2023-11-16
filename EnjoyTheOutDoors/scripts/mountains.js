"use strict";

const mountainsList = document.getElementById("mountainsList");
const mountainsDetailsParagraph = document.getElementById("mountainsDetailsParagraph");
const detailsButton = document.getElementById("detailsButton");
const outPut = document.getElementById("outPut");
function loadMountains() {
  for (let i = 0; i < mountainsArray.length; i++) {
    let option = document.createElement("option");
    option.textContent = mountainsArray[i].name;
    option.value = i;

    mountainsList.appendChild(option);
  }
}
loadMountains();

function showMountainDetails() {
  outPut.innerHTML = "";
  const userSelection = mountainsList.value;
  let title = document.createElement("h2");
  title.textContent = mountainsArray[userSelection].name;
  outPut.appendChild(title);

  let descriptiion = document.createElement("p");
  descriptiion.textContent = mountainsArray[userSelection].desc;
  outPut.appendChild(descriptiion);

  let elevation = document.createElement("p");
  elevation.textContent = `Elevation: ${mountainsArray[userSelection].elevation} feet`;
  outPut.appendChild(elevation);

  let difficulty = document.createElement("p");
  difficulty.innerText = `Difficulty: ${mountainsArray[userSelection].effort}`;
  outPut.appendChild(difficulty);

  let mountainImage = document.createElement("img");
  mountainImage.src = `images/${mountainsArray[userSelection].img}`;
  mountainImage.alt = `An image of ${mountainsArray[userSelection].name}`;
  outPut.appendChild(mountainImage);
  console.log(userSelection);
}

console.log(mountainsArray);
