"use strict"

window.onload=function() {
    let startDate = document.getElementById("startDate");
    let endDate = document.getElementById("endDate");
    let lastN = document.getElementById("lastN");
    let minutes = document.getElementById("minutes");
    let date1, date2, nValue, minutes2;

    startDate.addEventListener("change", function() {date1 = startDate.value});
    endDate.addEventListener("change", function() {date2 = endDate.value});
    lastN.addEventListener("change", function() {nValue = lastN.value});
    minutes.addEventListener("change", function() {minutes2 = minutes.value});

    document.querySelector("#btnTimePer").addEventListener("click", function() {
        let datesList = [];
        datesList.push(date1)
        datesList.push(date2)

        document.getElementById("headTimePer").style.color = "green";
        document.getElementById("headLastN").style.color = "black";
        document.getElementById("headMinutes").style.color = "black";

        MashupPlatform.wiring.pushEvent("Dates", datesList);
    })

    document.querySelector("#btnLastN").addEventListener("click", function() {
        document.getElementById("headLastN").style.color = "green";
        document.getElementById("headTimePer").style.color = "black";
        document.getElementById("headMinutes").style.color = "black";

        MashupPlatform.wiring.pushEvent("nValue", nValue);
    })

    document.querySelector("#btnMinutes").addEventListener("click", function() {
        document.getElementById("headMinutes").style.color = "green";

        MashupPlatform.wiring.pushEvent("Minutes", minutes2);
    })

}
