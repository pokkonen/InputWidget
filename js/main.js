"use strict"

window.onload=function() {
    let startDate = document.getElementById("startDate");
    let endDate = document.getElementById("endDate");
    let lastN = document.getElementById("lastN");
    let date1, date2, nValue;

    startDate.addEventListener("change", function() {date1 = startDate.value});
    endDate.addEventListener("change", function() {date2 = endDate.value});
    lastN.addEventListener("change", function() {nValue = lastN.value});

    document.querySelector("#btnTimePer").addEventListener("click", function() {
        let datesList = [];
        datesList.push(date1);
        datesList.push(date2);

        document.getElementById("headTimePer").style.color = "green";
        document.getElementById("headLastN").style.color = "black";

        MashupPlatform.wiring.pushEvent("Dates", datesList);
    })

    document.querySelector("#btnLastN").addEventListener("click", function() {
        document.getElementById("headLastN").style.color = "green";
        document.getElementById("headTimePer").style.color = "black";

        MashupPlatform.wiring.pushEvent("nValue", nValue);
    })

    document.querySelector("#btn10").addEventListener("click", function() {
        document.getElementById("btn10").style.color = "green";
        document.getElementById("btn20").style.color = "black";
        document.getElementById("btn30").style.color = "black";
        MashupPlatform.wiring.pushEvent("Minutes", "10");
    })
    document.querySelector("#btn20").addEventListener("click", function() {
        document.getElementById("btn20").style.color = "green";
        document.getElementById("btn10").style.color = "black";
        document.getElementById("btn30").style.color = "black";
        MashupPlatform.wiring.pushEvent("Minutes", "20");
    })
    document.querySelector("#btn30").addEventListener("click", function() {
        document.getElementById("btn30").style.color = "green";
        document.getElementById("btn20").style.color = "black";
        document.getElementById("btn10").style.color = "black";
        MashupPlatform.wiring.pushEvent("Minutes", "30");
    })

}
