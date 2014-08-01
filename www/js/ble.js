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
          