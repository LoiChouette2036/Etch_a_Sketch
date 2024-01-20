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
    