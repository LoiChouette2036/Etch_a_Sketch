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


function game(){
    //selection square element 
    var squares = document.getElementsByClassName("square");

    //add an event where we hover a square (so need a boucle for each square)
    for ( let k = 0 ; k < squares.length ;  k++ ){
        squares[k].addEventListener("mouseover", function () {

            console.log("hovered square");

            squares[k].setAttribute('style','background-color:' + getRandomColor() + ';');
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