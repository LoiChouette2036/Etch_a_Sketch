//selection ID element where we put square
var container = document.getElementById("container");






function creationSquare (numberOfSquares){
    
    // change the size of the container in order to make a beautiful square

    container.style.maxWidth = (20*numberOfSquares)+ (2*numberOfSquares) + 'px';
    container.style.maxHeight = (20*numberOfSquares)+(2*numberOfSquares) + 'px';

    for ( let j = 0 ; j < numberOfSquares ; j++) {
        for(let i = 0 ; i < numberOfSquares ; i++){
            // create a div element
            let square = document.createElement("div");
    
            // add a class to put CSS style
            square.className="square";
    
            // add the square into container
            container.appendChild(square);
    
        } 
    }
}

function getRandomColor (){
    // generate random values for red, green, and blue
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    // return the RGB color as string
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
}

function darkenSquare(square){
    var hoverCount = 0;
    var isBlack = false;

    square.addEventListener("mouseover", function () {
        // Si le carré est déjà noir, ne rien faire
        if (isBlack) {
            return;
        }

        hoverCount++;

        if (hoverCount >= 10) {
            hoverCount = 0;
            isBlack = true;
            square.style.backgroundColor = 'black';
        } else {
            var currentColor = square.style.backgroundColor;
            var rgbValues = currentColor.match(/\d+/g);
            var red = parseInt(rgbValues[0]);
            var green = parseInt(rgbValues[1]);
            var blue = parseInt(rgbValues[2]);

            red = Math.floor(red * 0.9);
            green = Math.floor(green * 0.9);
            blue = Math.floor(blue * 0.9);

            square.style.backgroundColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        }
    });
}


function game(){
    //selection square element 
    var squares = document.getElementsByClassName("square");

    //add an event where we hover a square (so need a boucle for each square)
    for ( let k = 0 ; k < squares.length ;  k++ ){
        squares[k].addEventListener("mouseover", function () {

            console.log("hovered square");

            squares[k].setAttribute('style','background-color:' + getRandomColor() + ';');
            darkenSquare(squares[k]);
        })
    }
}


let numberOfSquares = 16;
creationSquare(numberOfSquares);
game();
    

var clickOnButton = document.querySelector('.my_button')

clickOnButton.addEventListener('click', function (){
    console.log('button was clicked !');

    var userInput = prompt("Entrer un chiffre entre 0 et 100");
    if(userInput === null || isNaN(userInput) || userInput < 0 || userInput > 100 ){
        console.log("Respect the rules if you want to play");
        return 0;
    } else {
        console.log("you choose number : " + userInput )

        // erase the previous square.
        container.innerHTML = ''; 

        creationSquare(userInput);
        game();
    }
} )