const myCalculator = document.querySelector('.myCal');

const myKeys = [ [ 'C', ' ', ' ', '/' ], [ '7', '8', '9', '*' ], [ '4', '5', '6', '-' ], [ '1', '2', '3', '+' ], [ '0', '00', '.', '=' ], ]

const myOper = [ '%', '/', '*', '-', '+' ];

let myOutput;

document.addEventListener('DOMContentLoaded', () => {
    myOutput = document.createElement('div');
    myOutput.classList.add('output');
    myOutput.innerHTML = "0";
    myCalculator.appendChild(myOutput);
    for (let y = 0; y < myKeys.length; y++) {
        let div = document.createElement('div');
        div.classList.add('row');
        for (let x = 0; x < myKeys[ y ].length; x++) {
            let btn = document.createElement("div");
            btn.innerHTML = myKeys[ y ][ x ];
            btn.classList.add('btn');
            btn.addEventListener('click', btnHit);
            div.appendChild(btn);
        }
        myCalculator.appendChild(div);
    }
})

function btnHit(e) {
    let myValue = this.innerText;
    let myCal = myOutput.innerText;
    if (myCal == "0") {
        myCal = "";
    }
    if (myValue == "=") {
        myCal = eval(myCal);
    } else {
        let lastChar = myCal.substring(myCal.length - 1);
        if (myOper.includes(myValue)) {
            if (myOper.includes(lastChar)) {
                myCal = myCal.substring(0, myCal.length - 1)
            } else {
                myCal = eval(myCal);
            }
        }
        myCal = myCal + myValue;
    }
    if (myValue == "C") {
        myCal = "0";
    }
    myOutput.innerText = myCal;
}