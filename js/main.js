"use strict"

window.onload=function() {
    let startDate = document.getElementById("startDate");
    let endDate = document.getElementById("endDate");
    let lastN = document.getElementById("lastN");
    let date1, date2, nValue;

    startDate.addEventListener("change", function() {date1 = startDate.value});
    endDate.addEventListener("change", function() {date2 = endDate.value});
    lastN.addEventListener("change", function() {nValue = lastN.value});

    document.getElementById("btnMethodMax").style.color = "black";
    document.getElementById("btnMethodMin").style.color = "black";
    // document.getElementById("btnTimeSec").style.color = "black";
    document.getElementById("btnTimeMin").style.color = "black";
    document.getElementById("btnTimeHour").style.color = "black";
    document.getElementById("btnTimeDay").style.color = "black";
    document.getElementById("btnTimeMonth").style.color = "black";
    document.getElementById("headTimePer").style.color = "black";
    document.getElementById("headLastN").style.color = "black";
    document.getElementById("btn30").style.color = "black";
    document.getElementById("btn20").style.color = "black";
    document.getElementById("btn10").style.color = "black";

    // Method
    document.querySelector("#btnMethodMax").addEventListener("click", function() {
        document.getElementById("btnMethodMax").style.color = "green";
        document.getElementById("btnMethodMin").style.color = "black";
        MashupPlatform.wiring.pushEvent("AggrMethod", "max");
    })
    document.querySelector("#btnMethodMin").addEventListener("click", function() {
        document.getElementById("btnMethodMax").style.color = "black";
        document.getElementById("btnMethodMin").style.color = "green";
        MashupPlatform.wiring.pushEvent("AggrMethod", "min");
    })

    // TimePer
    // document.querySelector("#btnTimeSec").addEventListener("click", function() {
    //     document.getElementById("btnTimeSec").style.color = "green";
    //     document.getElementById("btnTimeMin").style.color = "black";
    //     document.getElementById("btnTimeHour").style.color = "black";
    //     document.getElementById("btnTimeDay").style.color = "black";
    //     document.getElementById("btnTimeMonth").style.color = "black";
    //     MashupPlatform.wiring.pushEvent("AggrPeriod", "second");
    // })
    document.querySelector("#btnTimeMin").addEventListener("click", function() {
        // document.getElementById("btnTimeSec").style.color = "black";
        document.getElementById("btnTimeMin").style.color = "green";
        document.getElementById("btnTimeHour").style.color = "black";
        document.getElementById("btnTimeDay").style.color = "black";
        document.getElementById("btnTimeMonth").style.color = "black";
        MashupPlatform.wiring.pushEvent("AggrPeriod", "minute");
    })
    document.querySelector("#btnTimeHour").addEventListener("click", function() {
        // document.getElementById("btnTimeSec").style.color = "black";
        document.getElementById("btnTimeMin").style.color = "black";
        document.getElementById("btnTimeHour").style.color = "green";
        document.getElementById("btnTimeDay").style.color = "black";
        document.getElementById("btnTimeMonth").style.color = "black";
        MashupPlatform.wiring.pushEvent("AggrPeriod", "hour");
    })
    document.querySelector("#btnTimeDay").addEventListener("click", function() {
        // document.getElementById("btnTimeSec").style.color = "black";
        document.getElementById("btnTimeMin").style.color = "black";
        document.getElementById("btnTimeHour").style.color = "black";
        document.getElementById("btnTimeDay").style.color = "green";
        document.getElementById("btnTimeMonth").style.color = "black";
        MashupPlatform.wiring.pushEvent("AggrPeriod", "day");
    })
    document.querySelector("#btnTimeMonth").addEventListener("click", function() {
        // document.getElementById("btnTimeSec").style.color = "black";
        document.getElementById("btnTimeMin").style.color = "black";
        document.getElementById("btnTimeHour").style.color = "black";
        document.getElementById("btnTimeDay").style.color = "black";
        document.getElementById("btnTimeMonth").style.color = "green";
        MashupPlatform.wiring.pushEvent("AggrPeriod", "month");
    })

    // Use Time Per
    document.querySelector("#btnTimePer").addEventListener("click", function() {
        let datesList = [];
        datesList.push(date1);
        datesList.push(date2);

        document.getElementById("headTimePer").style.color = "green";
        document.getElementById("headLastN").style.color = "black";
        MashupPlatform.wiring.pushEvent("Dates", datesList);
        MashupPlatform.wiring.pushEvent("nValue", null);
    })

    // Use LastN
    document.querySelector("#btnLastN").addEventListener("click", function() {
        document.getElementById("headLastN").style.color = "green";
        document.getElementById("headTimePer").style.color = "black";
        MashupPlatform.wiring.pushEvent("nValue", nValue);
        MashupPlatform.wiring.pushEvent("Dates", null);
    })

    // Minutes around alert
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
