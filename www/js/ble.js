var addressKey = null;

function initializeSuccess(obj) {
    document.write("d1<br/>");
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
    document.write("d2<br/>");
    document.write("Initialize error: " + obj.error + " - " + obj.message + "<br/>");
    console.log("Initialize error: " + obj.error + " - " + obj.message);
}

var introspect = {
    typeOf : function (obj) {
        type = typeof obj;
        return type === "object" && !obj ? "null" : type;
    }
}

function doIntro() {
    myInt=3;
    myStr="Hello";
    document.write("Introspection<br/>");
    document.write("myInt: " + typeof(myInt) + "<br/>");
    document.write("myStr: " + typeof(myStr) + "<br/>");
    document.write("bluetoothle: " + typeof(bluetoothle) + "<br/>");
    document.write("app: " + typeof(app) + "<br/>");
    document.write("craig: " + typeof(craig) + "<br/>");
}
          