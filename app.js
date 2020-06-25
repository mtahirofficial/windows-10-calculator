var btnValue;
var listOfIds = ["divide", "multiply", "subtract", "plus", "equal", "percent", "squareRoot", "square", "cube", "half", "clearEntry", "clear", "backSpace", "negativePlus", "dot"];
var expValue;
var result;
var inputExp;

function power(x, y) {
    return Math.pow(x, y);
}

function setValue(id) {
    btnValue = document.getElementById(id).innerHTML;
    expValue = document.getElementById("expression");
    result = document.getElementById("result");
    if (listOfIds.indexOf(id) != -1) {
        if (id == listOfIds[0]) { // ÷
            if (
                expValue.value[expValue.value.length - 1] != "="
            ) {
                if (result.value != "" && expValue.value == "") {
                    expValue.value = result.value + btnValue;
                    result.value = "";
                } else if (result.value != "" && expValue.value != "") {
                    expValue.value = expValue.value + result.value + btnValue;
                    result.value = "";
                }
            }
        } else if (id == listOfIds[1]) { // x
            if (
                expValue.value[expValue.value.length - 1] != "="
            ) {
                if (result.value != "" && expValue.value == "") {
                    expValue.value = result.value + btnValue;
                    result.value = "";
                } else if (result.value != "" && expValue.value != "") {
                    expValue.value = expValue.value + result.value + btnValue;
                    result.value = "";
                }

            }
        } else if (id == listOfIds[2]) { // -
            if (
                expValue.value[expValue.value.length - 1] != "="
            ) {
                if (result.value != "" && expValue.value == "") {
                    expValue.value = result.value + btnValue;
                    result.value = "";
                } else if (result.value != "" && expValue.value != "") {
                    expValue.value = expValue.value + result.value + btnValue;
                    result.value = "";
                }
            }

        } else if (id == listOfIds[3]) { // +
            if (
                expValue.value[expValue.value.length - 1] != "="
            ) {
                if (result.value != "" && expValue.value == "") {
                    expValue.value = result.value + btnValue;
                    result.value = "";
                } else if (result.value != "" && expValue.value != "") {
                    expValue.value = expValue.value + result.value + btnValue;
                    result.value = "";
                }

            }
        } else if (id == listOfIds[4]) { // =
            if (
                expValue.value[expValue.value.length - 1] != "="
            ) {
                if (result.value != "" && expValue.value == "") {
                    expValue.value = result.value + btnValue;
                    result.value = eval(result.value);
                } else if (result.value != "" && expValue.value != "") {
                    expValue.value = expValue.value + result.value;
                    var exp = expValue.value;
                    expValue.value = expValue.value.replace(/÷/g, "/");
                    expValue.value = expValue.value.replace(/x/g, "*");
                    result.value = eval(expValue.value);
                    expValue.value = exp + btnValue;

                }

            }
        } else if (id == listOfIds[5]) { // %
            if (
                expValue.value[expValue.value.length - 1] != "="
            ) {
                if (result.value != "" && expValue.value == "" || expValue.value == "0") {
                    expValue.value = "0";
                    result.value = "0";
                } else if (result.value != "" && expValue.value != "") {
                    var total = expValue.value.slice(0, expValue.value.length - 1);
                    var valueOfPercent = (result.value / 100) * total;
                    result.value = valueOfPercent.toString();
                }
            }
        } else if (id == listOfIds[6]) { // √
            if (
                expValue.value[expValue.value.length - 1] != "="
            ) {
                if (result.value != "" && expValue.value == "") {
                    expValue.value = btnValue + result.value;
                    result.value = Math.sqrt(result.value);
                } else if (result.value != "" && expValue.value != "") {
                    expValue.value = btnValue.value + result.value;
                    result.value = Math.sqrt(result.value);
                }
            }
        } else if (id == listOfIds[7]) { // x2
            if (
                expValue.value[expValue.value.length - 1] != "="
            ) {
                if (result.value != "" && expValue.value == "") {
                    expValue.value = "sqr(" + result.value + ")";
                    result.value = power(result.value, 2);
                } else if (result.value != "" && expValue.value != "") {
                    expValue.value = "sqr(" + expValue.value + ")";
                    result.value = power(result.value, 2);
                }
            }
        } else if (id == listOfIds[8]) { // x3
            if (
                expValue.value[expValue.value.length - 1] != "="
            ) {
                if (result.value != "" && expValue.value == "") {
                    expValue.value = "cuberoot(" + result.value + ")";
                    result.value = power(result.value, 3);
                } else if (result.value != "" && expValue.value != "") {
                    expValue.value = "cuberoot(" + expValue.value + ")";
                    result.value = power(result.value, 3);
                }
            }
        } else if (id == listOfIds[9]) { // 1⁄𝓍
            if (
                expValue.value[expValue.value.length - 1] != "="
            ) {
                if (result.value != "" && expValue.value == "") {
                    expValue.value = "1/(" + result.value + ")";
                    result.value = 1 / result.value;
                } else if (result.value != "" && expValue.value != "") {
                    expValue.value = "1/(" + expValue.value + ")";
                    result.value = result.value = 1 / result.value;

                }
            }

        } else if (
            id == listOfIds[10]
        ) { // CE
            result.value = "";
        } else if (
            id == listOfIds[11]
        ) { // C
            expValue.value = "";
            result.value = "";
        } else if (
            id == listOfIds[12]
        ) { // ⌫
            var str = result.value;
            var lengthOdStr = str.length;
            str = str.slice(0, lengthOdStr - 1);
            result.value = str;
        } else if (
            id == listOfIds[13]
        ) { // ±
            if (
                expValue.value[expValue.value.length - 1] != "="
            ) {
                if (result.value != "") {
                    result.value = "-" + result.value;
                }
            }
        } else if (
            id == listOfIds[14]
        ) { // .
            if (result.value.indexOf(".") == -1) {
                if (result.value == "") {
                    result.value = "0" + btnValue;
                } else {
                    result.value = result.value + "."
                }
            }
        }
    } else {

        if (result.value === "") {
            result.value = btnValue;
            inputExp = result.value;
        } else {
            result.value += btnValue;
            inputExp = result.value;
        }
    }
}