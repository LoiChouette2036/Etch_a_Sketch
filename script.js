//selection ID element where we put square
var container = document.getElementById("container");

let numberOfSquares = 16;

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

//selection square element 
var squares = document.getElementsByClassName("square");

//add an event where we hover a square (so need a boucle for each square)
for ( let k = 0 ; k < squares.length ;  k++ ){
    squares[k].addEventListener("mouseover", function () {

        console.log("hovered square");

        squares[k].setAttribute('style','background-color: #FF0000;');
    })
}
    