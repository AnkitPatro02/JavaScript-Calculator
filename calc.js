// const display=document.querySelector("#display");
// const buttons=document.querySelectorAll("button");

// buttons.forEach((item)=>{
//     item.onclick=()=>{
//         if(item.id=='clear'){
//             display.innerText=''
//         }
//         else if(item.id=='bs'){
//             let string=display.innerText.toString();
//             display.innerText=string.substr(0,string.length-1);
//         }
//         else if(display.innerText!='' && item.id=='equal'){
//             display.innerText=eval(display.innerText);
//         }
//         else if(display.innerText!='' && item.id=='equal'){
//             display.innerText='Empty';
//             setTimeout(()=>(display.innerText=''),2000);
//         }
//         else if(display.innerText!=''){
//             display.innerText=cos();
//         }
//         else{
//             display.innerText+=item.id;
//         }

//     }
// })

// function addChar(input, character) {
//     if (input.value == null || input.value == "0") input.value = character;
//     else input.value += character;
// }

// function cos(form) {
//     form.display.value = Math.cos(form.display.value);
// }

// function sin(form) {
//     form.display.value = Math.sin(form.display.value);
// }

// function tan(form) {
//     form.display.value = Math.tan(form.display.value);
// }

// function sqrt(form) {
//     form.display.value = Math.sqrt(form.display.value);
// }

// function ln(form) {
//     form.display.value = Math.log(form.display.value);
// }

// function exp(form) {
//     form.display.value = Math.exp(form.display.value);
// }

// function deleteChar(input) {
//     input.value = input.value.substring(0, input.value.length - 1);
// }
// var val = 0.0;
// function percent(input) {
//     val = input.value;
//     input.value = input.value + "%";
// }

// function changeSign(input) {
//     if (input.value.substring(0, 1) == "-")
//         input.value = input.value.substring(1, input.value.length);
//     else input.value = "-" + input.value;
// }

// function compute(form) {
// if (val !== 0.0) {
// var percent = form.display.value;
// percent = pcent.substring(percent.indexOf("%")+1);
// form.display.value = parseFloat(percent)/100 * val;
// val = 0.0;
// } else
//     form.display.value = eval(form.display.value);
// }

// function square(form) {
//     form.display.value = eval(form.display.value) * eval(form.display.value);
// }

// function checkNum(str) {
//     for (var i = 0; i < str.length; i++) {
//         var ch = str.charAt(i);
//         if (ch < "0" || ch > "9") {
//             if (
//                 ch != "/" &&
//                 ch != "*" &&
//                 ch != "+" &&
//                 ch != "-" &&
//                 ch != "." &&
//                 ch != "(" &&
//                 ch != ")" &&
//                 ch != "%"
//             ) {
//                 alert("invalid entry!");
//                 return false;
//             }
//         }
//     }
//     return true;
// }







const screen = document.querySelector("#screen")
const btn = document.querySelectorAll(".btn");

for (item of btn) {
    item.addEventListener('click', (e) => {
        btntext = e.target.innerText;

        if (btntext == '*') {
            btntext = '*';
        }

        if (btntext == '/') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}

function cos() {
    screen.value = Math.cos(screen.value);
}
function sin() {
    screen.value = Math.sin(screen.value);
}
function tan() {
    screen.value = Math.tan(screen.value);
}
function sqrt() {
    screen.value = Math.sqrt(screen.value, 2);
}
function cube() {
    screen.value = screen.value * screen.value * screen.value;
}
function square() {
    screen.value = screen.value * screen.value
}
function log() {
    screen.value = Math.log(screen.value);
}
function e() {
    screen.value = 2.71828182846;
}
function fact() {
    var i, num, f;
    f = 1
    num = screen.value;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }
    i = i - 1;
    screen.value = f;
}
function backspc() {
    screen.value = screen.value.substr(0, screen.value.length - 1);
}
function clear() {
    screen.value = '';
}
