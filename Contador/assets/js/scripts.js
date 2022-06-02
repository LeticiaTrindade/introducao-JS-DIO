

var currentNumberWhapper = document.getElementById("currentNumber"); 
let button = document.getElementById("add");
let button2 = document.getElementById("sub");

console.log(typeof button);
console.log(typeof currentNumberWhapper);

function increment(){

    currentNumberWhapper.firstChild.nodeValue = currentNumberWhapper.innerText++;
    if ( currentNumberWhapper.innerText > 9){
        button.disabled = true;
        currentNumberWhapper.style.color = "red";

    }
    else {
        button.disabled = false;
        currentNumberWhapper.style.color = "";
    }

    console.log(currentNumberWhapper.innerText);
}

function decrement(){

    currentNumberWhapper.firstChild.nodeValue = currentNumberWhapper.innerText--;
    if ( currentNumberWhapper.innerText < 1){
        button2.disabled = true;
        currentNumberWhapper.style.color = "red";
    }
    else{
        button2.disabled = false;
        currentNumberWhapper.style.color = "black";
    }

    console.log(currentNumberWhapper.innerText);
}

function reset(){
    button.disabled = false;
    button2.disabled = false;
    currentNumberWhapper.innerText = 0;
    currentNumberWhapper.style.color = "black";
    

}

var test = document.getElementById("sub");
test.addEventListener("click", decrement, false);

var test = document.getElementById("add");
test.addEventListener("click", increment, false); 

var test = document.getElementById("reset");
test.addEventListener("click", reset, false); 

