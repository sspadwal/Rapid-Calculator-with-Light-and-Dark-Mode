

let btns = document.getElementsByClassName('btn');
let screen = document.getElementById('screen');

let sum = 0;
let cal = "";

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', clicked);
}

function isNumber(val) {
    if (val == '1' || val == '2' || val == '3' || val == '4' || val == '5' || val == '6' || val == '7' || val == '8' || val == '9' || val == '0' || val=='.') {
        return true;
    }
}

function isOperator(val) {
    if (val == '+' || val == '-' || val == '*' || val == '/' || val == '%') {
        return true;
    }
}


function clicked(e) {

    let btnclick = e.target.innerHTML;

    try {


        if (isOperator(btnclick)) {
            cal += btnclick;
          


        }
        if (isNumber(btnclick)) {
            cal += btnclick

        }
        if (btnclick == "C") {
            cal = " ";
        }

        if (btnclick == "=") {

            sum = eval(cal);
            cal = String(sum);

        }

        if (btnclick == "←") {
            cal = cal.slice(0, cal.length - 1);

        }
        console.log(cal);
        
    }
    catch (error) {

        alert("Invalid Input")
        cal = " ";
        
    }
    screen.innerHTML=cal;


}

function demo() {


    let a = document.getElementById('main');
    let s = document.getElementById('screen');
    if (a.style.background = "white" && s.style.background == "white") {
        a.style.background = "black";
        s.style.background = "black";
        s.style.color="white";

    }
    else {
        a.style.background = "white";
        s.style.background = "white";
        s.style.color="black"

    }
  
}
