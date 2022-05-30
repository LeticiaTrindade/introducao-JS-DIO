

var currentNumberWhapper = document.getElementById("currentNumber"); 
let button = document.getElementById("add");
let button2 = document.getElementById("sub");


console.log(typeof button);
console.log(typeof currentNumberWhapper);

function increment(){

    currentNumberWhapper.firstChild.nodeValue = currentNumberWhapper.innerText++;
    if ( currentNumberWhapper.innerText > 9){
        button.disabled = true;
    }
    else {
        button.disabled = false;
    }

    console.log(currentNumberWhapper.innerText);
}

function decrement(){

    currentNumberWhapper.firstChild.nodeValue = currentNumberWhapper.innerText--;
    if ( currentNumberWhapper.innerText < 1){
        button2.disabled = true;
    }
    else{
        button2.disabled = false;
    }

    console.log(currentNumberWhapper.innerText);
}

var test = document.getElementById("sub");
test.addEventListener("click", decrement, false);

var test = document.getElementById("add");
test.addEventListener("click", increment, false); 

