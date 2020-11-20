// TODO Functions to Do:
// TODO F to handle 3 levels of gaming: -Beginner 9*9 10bombs  -Intermediate 16*16 40bombs -Expert 30*16 99bombs (use Object)
// TODO Function Reset (to use every time the game start and when user click on the button with the face)
// TODO Function to create random bombs position
// TODO Function to count how many bombs are around (this works just if firstClick = true and after bombs are place and before function to show the clicked cell and nearby)
// TODO Function to show the clicked cell and nearby
// TODO Function game lost


//* When game is starting, all the cells have one class of covered
//* The games have one array to handle where the bombs are 
//* The position of the bombs is decided after the user click the first cell
//* The first cell have always CellInfo.nBombsClose = 0
//* The bombs position are randomly decided and the value is stored in the array of object (switch CellInfo.nBombsClose = 0 )
//* From the bombs position, give a counter to the cells that are close to the bomb (this value starts always from 0 and show the bombs closer)
//* If the cell counter is 0, when user click on it reveal all the one that are close there


function init() {
  //* Variables
  const grid = document.querySelector('.grid') //Selecting the div

  //*Testing with easy level
  const width = 9
  const height = 9
  const cellCount = width * height
  const nBombs = 10
  const cells = []    //maybe I can add it to the classStatusInfo
  const cellsStatusInfo = []
  const firstClick = true //! this have to change after the first click

  //* Creating a Class to produce Object where I store info about the cell (if there is a bomb? or covered? etc)

  class CellInfo{
    constructor (idCell, isCovered, haveBomb, haveFlag, nBombsClose){
      this.idCell = idCell           //same as i in createGrid
      this.isCovered = isCovered            //t||f
      this.haveBomb = haveBomb             //t||f
      this.haveFlag = haveFlag            //t||f
      this.nBombsClose = nBombsClose      //this will count the n of bombs around
    }
    //? function for add bombs here?
    //? function for count the bombs around here?
  }
  
  //* Functions

  function createGrid() {                   //This function create the cells in the grid with status of covered
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.dataset.id = i 
      cell.classList.add('covered')
      grid.appendChild(cell)
      cells.push(cell)       //maybe I don't need this anymore
      cellsStatusInfo.push(new CellInfo(i, true, false, false, 0))
    }
  }

  function uncoverCell(event){              //This function change the class of the clicked cell from covered to uncovered
    const selected = event.target.dataset.id
    cellsStatusInfo[selected].isCovered = false
    cellsStatusInfo[selected].classList.remove('covered')
  }

  // function randomBombPosition(){
  //   for (let i = 0; i < cellCount; i++){

  //   }
  // }

  //! Tests...To remove at the end
  console.log(cellsStatusInfo)
  console.log(cellsStatusInfo)

  //*Event listeners
  createGrid()
  cells.forEach(cell => 
    cell.addEventListener('click', uncoverCell))
}
window.addEventListener('DOMContentLoaded',init)