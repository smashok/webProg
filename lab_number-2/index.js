// task1
let c1 = document.getElementById('c1').value;
let c2 = document.getElementById('c2').value;

f = c1;
c1.textContent = c2;
c2.textContent = f;
document.getElementById('c1').value = c2;
document.getElementById('c2').value = c1;
// task2
let r = 2;
let s = 2 * Math.PI * Math.pow(r, 2);
let enter = document.getElementById('demo');
enter.innerHTML = 'Площа кола: ' + ' ' + s;
// task3

let start = document.getElementById('start');
start.onclick = function () {
    //alert('work');
    const str = (prompt('input mass: '));
    const re = str.split(" ");
    console.log(re);
    time_new = re.map(Number);
    console.log(time_new);
    console.log(Math.max.apply(null, time_new));
    alert('max elem: ' + Math.max.apply(null, time_new));
    document.cookie = re;
    alert(document.cookie);
    alert("Дані записані в кукі");
}
// 4
function getFocus() {
    document.getElementById("myText").focus();
}

function loseFocus() {
    document.getElementById("myText").blur();
    let coloR = prompt('input color: ');
    let block = document.querySelector('.block-sm');
    block.style.background = coloR;
    
    console.log(coloR);
}
