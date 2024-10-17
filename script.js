function disp(input) {
    const num = document.getElementById("num");
    num.value = num.value+ input;
}

function clearr() {
    const num = document.getElementById("num");
    num.value = "";
}

function calculate() {
    const num = document.getElementById("num");
        num.value = eval(num.value);
    } 