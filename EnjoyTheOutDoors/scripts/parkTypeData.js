const parkTypesArray = [
  "National Park",
  "National Monument",
  "Recreation Area",
  "Scenic Trail",
  "Battlefield",
  "Historic",
  "Memorial",
  "Preserve",
  "Island",
  "River",
  "Seashore",
  "Trail",
  "Parkway",
];

const parkList = document.getElementById("parkList");
const selectParkButton = document.getElementById("selectParkButton");

function loadParkList() {
  for (const park of parkTypesArray) {
    let option = document.createElement("option");
    option.value = park;
    option.text = park;
    parkList.appendChild(option);
  }
}
loadParkList();
