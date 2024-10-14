// alert("hello")
var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);  
        buttonAnimation(buttonInnerHTML)
    });
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key);  
    buttonAnimation(event.key)
});

function makeSound(key) {  
    switch (key) {  
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(numberOfDrums);
    }
}

function buttonAnimation(currentkey){

    var activeButton=document.querySelector("." + currentkey)

    activeButton.classList.add("pressed")
    
    setTimeout(function(){
        
    activeButton.classList.remove("pressed")

    },100)
}


// Count how many drum buttons are on the page

// Loop through all the drum buttons

// Add a click event to each button

// Get the letter (like "w", "a") from the button

// Call the makeSound function and give it the button letter

// Listen for any key pressed on the keyboard

// Call the makeSound function and give it the key pressed

// This function will play the correct sound for each button or key

// Check which key was pressed or clicked

// If "w" is pressed, play the first tom sound

// If "a" is pressed, play the second tom sound

// If "s" is pressed, play the third tom sound

// If "d" is pressed, play the fourth tom sound

// If "j" is pressed, play the kick drum sound

// If "k" is pressed, play the crash cymbal sound

// If "l" is pressed, play the snare drum sound

// If no key matches, just print the number of drums



