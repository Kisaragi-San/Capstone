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

const parkTypeList = document.getElementById("parkTypeList");
const selectParkTypeButton = document.getElementById("selectParkTypeButton");

function loadParkTypeList() {
  for (const parkType of parkTypesArray) {
    let option = document.createElement("option");
    option.value = parkType;
    option.text = parkType;
    parkTypeList.appendChild(option);
  }
}
loadParkTypeList();
