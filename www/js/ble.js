var addressKey = null;

function initializeSuccess(obj) {
    document.write("d1");
    if (obj.status == "initialized") {
        var address = window.localStorage.getItem(addressKey);
        if (address === null) {
            document.write("Bluetooth initialized successfully, starting scan for devices.<br/>");
            console.log("Bluetooth initialized successfully, starting scan for devices.");
//var paramsObj = {"serviceAssignedNumbers":[heartRateServiceAssignedNumber]};
//bluetoothle.startScan(startScanSuccess, startScanError, paramsObj);
} else {
    document.write("Connecting to device<br/>");
    connectDevice(address);
}
} else {
    document.write("Unexpected initialize status: " + obj.status + "<br/>");
    console.log("Unexpected initialize status: " + obj.status);
}
}

function initializeError(obj) {
    document.write("d2");
    document.write("Initialize error: " + obj.error + " - " + obj.message + "<br/>");
    console.log("Initialize error: " + obj.error + " - " + obj.message);
}