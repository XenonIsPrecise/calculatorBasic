
/**
 * 
 * 
 * -------------- A theSupreme project --------------
 * 
 * 
 * From author:
 * 
 * This is a simple calculator webapp I made while learning 
 * web development. This is my very first real web project. 
 * A lot of my former experience from other programming languages 
 * translated over to JavaScript. The UI part with HTML and CSS
 * was a learning curve though. I am pretty sure I have a lot of 
 * redundant properties to my elements which my eyes can't recognize yet. 
 * I was about to use an expression tree with preorder traversal to
 * do the actual calculations but some smart dude already baked in 
 * an eval function to do the heavy lifting, big thanks. I had fun
 * working on this project.
 */



// declaring varibales to store html elements
var numbers = document.getElementsByClassName("number");
var screen = document.getElementById("screen");
var operations = document.getElementsByClassName("operation");

// looping though the array of number keys and adding the 
// right number to the screen
for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        if (screen.innerHTML.length !== 0 || numbers[i].innerHTML !== "0") {
            screen.innerHTML += numbers[i].innerHTML;
        }
    })
}

// looping through the array of operation keys and 
// adding the right operator to the screen
for (let i = 0; i < operations.length; i++) {
    operations[i].addEventListener("click", function() {
        screen.innerHTML += operations[i].innerHTML;
    })
}

// making the clear button clear the screen
document.getElementById("clear").addEventListener("click", function () {
    screen.innerHTML = "";
})

// making the equals button evaluate the screen content
document.getElementById("equals").addEventListener("click", function() {
    screen.innerHTML = eval(screen.innerHTML);
})

// making the % button return the input number in percentage
document.getElementById("percent").addEventListener("click", function() {
    screen.innerHTML = screen.innerHTML / 100;
})

// array of keys the app can take as input from the keyboard
keys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "/", "*", "-", "+"];

// logic to handle keyboard inputs
document.addEventListener("keydown", function(event) {
    if (event.key === "0" && screen.innerHTML.length !== 0) {
        screen.innerHTML += "0";
    } else if (keys.includes(event.key)) {
        screen.innerHTML += event.key;
    } else if (event.key === "Enter") {
        screen.innerHTML = eval(screen.innerHTML);
    } else if (event.key === "Backspace") {
        screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
    } else if (event.key === " ") {
        screen.innerHTML = "";
    } 
})
