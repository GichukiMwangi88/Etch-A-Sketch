//Create divs using JS
//Create variables to store the container div
//and make changes to it 
//Create a 16 X 16 grid of square divs using a for loop
function makeBoard(size) {
    let board = document.querySelector(".board");   //selects the board that the grids will be contained
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; //sets the amount of columns for the grid
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;   //sets the amount of rowss

    let amount = size * size; //stores specified size of the grid by the user

    //For loop to loop through the size entered by user
    //Create a grid
    //Create a class for the grid to enable styling
    //Event listener for mouse over event that will change bkg color of grid to specified color
    //Insert a new grid subsequently

    for (let i = 0; i < amount; i++) {
        let grid = document.createElement("div");
        grid.classList.add("gridItem");
        grid.addEventListener('mouseover', () => grid.style.backgroundColor = 'black');
        grid.style.backgroundColor = "red";
        board.insertAdjacentElement("beforeend", grid);  //appends created div after each div created
    }
};

//Function to change size of the board
// and validate the input from the user
//then call the makeBoard function to create new board
function changeSize(input) {
    if (input >= 2 && input <= 100) {
        makeBoard(input);
    }
    else {
        prompt("Too many squares! Pick again!");
    }
};

//Event listener for the button when clicked
//Prompts the user to pick grid size
//And makes the board with the specified input size

//Create a variable to store the button
//Then add the event listener to allow user 
//to enter size of board and call the changeSize function
//to create board

const gridSizeBtn = document.querySelector("#start");

gridSizeBtn.addEventListener('click', function () {
    let input = prompt("Pick grid size por favor");

    changeSize(input);
});

//Create a button that will reset the grid 
//Add an event listener to reset the grid

const reset = document.querySelector("#reset");

reset.addEventListener('click', function () {
    let board = document.querySelector(".board")
    board.replaceChildren();
});