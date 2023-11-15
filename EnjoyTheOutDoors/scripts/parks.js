"use strict";

const stateList = document.getElementById("stateList");


function loadStateList() {
  for (const state of locationsArray) {
    let option = document.createElement("option");
    option.value = state;
    option.text = state;
    stateList.appendChild(option);
  }
}
loadStateList();

const parkTypeList = document.getElementById("parkTypeList");

function loadParkTypeList() {
  for (const parkType of parkTypesArray) {
    let option = document.createElement("option");
    option.value = parkType;
    option.text = parkType;
    parkTypeList.appendChild(option);
  }
}
loadParkTypeList();

const parkInfoTableBody = document.querySelector("#parkInfoTableBody");

function loadParkTable() {
  for (const nationalPark of nationalParksArray) {
    buildParkInfoRow(nationalPark);
  }
}

function buildParkInfoRow(park) {
  let tr = parkInfoTableBody.insertRow();
  let td1 = tr.insertCell();
  td1.innerText = park.LocationID;
  let td2 = tr.insertCell();
  td2.innerText = park.LocationName;
  let td3 = tr.insertCell();
  td3.innerText = park.Address;
  let td4 = tr.insertCell();
  td4.innerText = park.City;
  let td5 = tr.insertCell();
  td5.innerText = park.State;
  let td6 = tr.insertCell();
  td6.innerText = park.ZipCode.toLocaleString();
  let td7 = tr.insertCell();
  td7.innerText = park.Phone;
  let td8 = tr.insertCell();
  td8.innerText = park.Fax;
  let td9 = tr.insertCell();
  td9.innerText = park.Location.coordinates.toLocaleString();

  let td10 = tr.insertCell();
  if (park.Visit) {
    td10.innerText = park.Visit;
  }
}

loadParkTable();
