let x = "";
let sign = "";
let y = "";
let flag = false;

let numbers = ['0', '00', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.',];
let action = ['+', '-', 'x', '/', '%', 'sqrt'];

let out = document.querySelector('.big');
let outSmall = document.querySelector('.small');
let ac = document.querySelector('#ac');

ac.addEventListener('click', clearAll);

function clearAll() {
    x = "";
    sign = "";
    y = "";
    flag = false;
    out.innerHTML = 0;
    outSmall.innerHTML = "";
}

let btns = document.querySelector('.buttons').children;
for (let btn of btns) {
    // console.log(btn.innerHTML);
    btn.classList.add('btn');
}


document.querySelector('.buttons').addEventListener('click', (event) => {

    if(flag==false){

    if (!event.target.classList.contains('btn')) return;

    if (event.target.id == 'ac') clearAll;

    // out.innerHTML = '';

    const key = event.target.textContent;

    if (numbers.includes(key)) { //если нажата кнопка из списка массива

        if (y === '' && sign === '') {
            x += key;
            out.innerHTML = x;
        }

        else if (x !== '' && y != '' && flag) {
            y = key;
            flag = false;
            out.innerHTML = y;
        }

        else {
            y += key;
            out.innerHTML = y;
        }
        console.log(x, sign, y);
        return;
    }

    if (action.includes(key)) { //если нажата кнопка из списка массива
        sign = key;
        console.log(x, sign, y);
        out.innerHTML = sign;;
        return;
    }

    if (key === '=') {
        outSmall.innerHTML = x + sign + y + '=';
        if (y === '' && x === '') { location.reload(); }
        if (y === '') { y = x; }
        switch (sign) {
            case '+':
                x = (+x) + (+y);
                break;

            case '-':
                x = x - y;
                break;

            case 'x':
                x = x * y;
                break;

            case "/":
                if (y === '0' || y === '00') {
                    alert('mistake');
                    location.reload();
                    break;
                }
                x = (x / y).toFixed(2);
                break;

            case '%':
                x = (x * y) / 100;
                break;

            case 'sqrt':
                x = Math.sqrt(x).toFixed(2);
                break;

        }

        flag = true;
        out.innerHTML = x;
    }
}

})
