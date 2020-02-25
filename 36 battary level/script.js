navigator.getBattery().then(function (battery) {
    function updateAllBattaryInfo() {
        updateChargeInfo();
        // updateLevelInfo();
         updateChargingInfo();
         updateDisChargingInfo();
    }
    battery.addEventListener("chargingchange", function () {
        updateChargeInfo();
    })

    function updateChargeInfo() {
        console.log(battery.charging);
        if (battery.charging) {
            document.querySelector("#battary-status").innerHTML = "Заряжается";
            document.querySelector("#battary-level").classList.add('battary-animation');
            updateLevelInfo();
        } else{
            document.querySelector("#battary-status").innerHTML = "Не заряжается";
            document.querySelector("#battary-level").classList.remove("battary-animation");}
            updateLevelInfo();
    }

    function updateLevelInfo(){
        document.querySelector("#battery-digit").innerHTML = battery.level*100 + "%";
        document.querySelector("#battary-level").style.width = battery.level*100 + "%"; 
    }

    battery.addEventListener('chargintimechange', updateChargingInfo )

    function updateChargingInfo(){
        document.querySelector("#charding-time").innerHTML = battery.chargingTime;
        console.log(battery);
    }
    battery.addEventListener('dischargingTime', updateDisChargingInfo );
    function updateDisChargingInfo(){
        document.querySelector("#discharding-time").innerHTML = battery.dischargingTime;  
    }

    updateAllBattaryInfo();




})