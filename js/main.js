"use strict"

window.onload=function() {
    let startDate = document.getElementById("startDate");
    let endDate = document.getElementById("endDate");
    let lastN = document.getElementById("lastN");
    let date1, date2, nValue, aggrMethod, aggrPeriod, string;

    startDate.addEventListener("change", function() {date1 = startDate.value});
    endDate.addEventListener("change", function() {date2 = endDate.value});
    lastN.addEventListener("change", function() {nValue = lastN.value});

    // Method
    document.querySelector("#btnMethodMax").addEventListener("click", function() {
        document.getElementById("btnMethodMax").style.color = "green";
        document.getElementById("btnMethodMin").style.color = "black";
        aggrMethod = "max";
    })
    document.querySelector("#btnMethodMin").addEventListener("click", function() {
        document.getElementById("btnMethodMax").style.color = "black";
        document.getElementById("btnMethodMin").style.color = "green";
        aggrMethod = "min";
    })

    // Time period
    document.querySelector("#btnTimeMin").addEventListener("click", function() {
        document.getElementById("btnTimeMin").style.color = "green";
        document.getElementById("btnTimeHour").style.color = "black";
        document.getElementById("btnTimeDay").style.color = "black";
        document.getElementById("btnTimeMonth").style.color = "black";
        aggrPeriod = "minute";
    })
    document.querySelector("#btnTimeHour").addEventListener("click", function() {
        document.getElementById("btnTimeMin").style.color = "black";
        document.getElementById("btnTimeHour").style.color = "green";
        document.getElementById("btnTimeDay").style.color = "black";
        document.getElementById("btnTimeMonth").style.color = "black";
        aggrPeriod = "hour";
    })
    document.querySelector("#btnTimeDay").addEventListener("click", function() {
        document.getElementById("btnTimeMin").style.color = "black";
        document.getElementById("btnTimeHour").style.color = "black";
        document.getElementById("btnTimeDay").style.color = "green";
        document.getElementById("btnTimeMonth").style.color = "black";
        aggrPeriod = "day";
    })
    document.querySelector("#btnTimeMonth").addEventListener("click", function() {
        document.getElementById("btnTimeMin").style.color = "black";
        document.getElementById("btnTimeHour").style.color = "black";
        document.getElementById("btnTimeDay").style.color = "black";
        document.getElementById("btnTimeMonth").style.color = "green";
        aggrPeriod = "month";
    })

    // Choose search method
    document.querySelector("#btnTimePer").addEventListener("click", function() {
        document.getElementById("headTimePer").style.color = "green";
        document.getElementById("headLastN").style.color = "black";
        document.getElementById("timeperDiv").style.border = "1px ridge green";
        document.getElementById("lastnDiv").style.border = "";

        string = "?aggrMethod=" + aggrMethod + "&aggrPeriod=" + aggrPeriod;
		string += "&dateFrom=" + date1 + "&dateTo=" + date2;

		MashupPlatform.wiring.pushEvent("DatesInfo", string);
    })

    document.querySelector("#btnLastN").addEventListener("click", function() {
        document.getElementById("headLastN").style.color = "green";
        document.getElementById("headTimePer").style.color = "black";
        document.getElementById("lastnDiv").style.border = "1px ridge green";
        document.getElementById("timeperDiv").style.border = "";

		string = "?lastN=" + nValue;

        MashupPlatform.wiring.pushEvent("DatesInfo", string);
    })
}
