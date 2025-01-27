//To check Script is working.
console.log("script check");

let form = document.querySelector("form");
let output = document.querySelector('#output');
let gues = document.querySelector('.gues');
let check = document.querySelector('#check-btn');
let output2 = document.querySelector('#output2');
let output3 = document.querySelector('#output3');
let clearbtn = document.querySelector('#clearBtn');
let win = document.querySelector("#win");
let los = document.querySelector("#los");

form.addEventListener('submit', (event)=>{
    console.log('Event is listening');
    event.preventDefault();

    //getting value from input
    const min = parseInt(document.getElementById('min').value);
    const max = parseInt(document.getElementById('max').value);

    console.log(min,max);
    if (isNaN(min) || isNaN(max) || min > max || min == max) {
        output.innerText = "!! Min is greater then Max or equls to Max or Not-a-Number. Please re-enter and click 'Generate' again !!"
        return;
    }
    output.innerText = 'Number generated !!';
    output2.innerText = '';
    const ranNum = randomNumberGenerator(min,max);
    gues.style.display = 'block';
    
    check.addEventListener('click', ()=>{
        console.log("button is working");
        const guesVal = parseInt(document.getElementById('gues-num').value);
        if (isNaN(guesVal)) {
            output2.innerText = "Not-a-Number. re-Enter";
            return;
        }
        else if(guesVal != ranNum){
            output2.innerText = "!! No !!. gues again."
            los.style.display = "block";
            win.style.display = "none";
        }
        else if(guesVal == ranNum){
            output2.innerText = "!! YOU WIN !!";
            los.style.display = "none";
            win.style.display = "block";
            
        }
    
    });

    clearbtn.addEventListener('click',()=>{
        document.getElementById('min').value = "";
        document.getElementById('max').value = "";
        document.getElementById('gues-num').value = "";
        output.innerText = '';
        output2.innerText = '';
        gues.style.display = 'none';
        win.style.display = "none";
        los.style.display = "none";
    });

});



//function for generating a random number in range.
function randomNumberGenerator (min,max) {
    return Math.floor(Math.random()*(max - min + 1)) + min;
};