"use strict"

function init() {

    console.log(a)
    console.log(b)
    console.log(c)
}

let startDate = document.getElementById("startDate");
// Ei toimi?

startDate.addEventListener("change", function() {console.log(startDate.value)})

// let a = document.querySelector("startDate").addEventListener("change", function() {console.log()})
// let b = document.getElementById("endDate").value;
// let c = document.getElementById("lastN").value;

init()
