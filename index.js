var setSize = 16;
var grid = document.querySelector(".grid");
document.body.onload = createGrid(setSize);

function addSquare(numSquares) {
    let squareSize = document.querySelector('.grid').clientWidth / setSize;
    const currentDiv = document.querySelector(".grid");
    const newDiv=document.createElement("div");
    currentDiv.appendChild(newDiv);
    newDiv.id=`square-${numSquares}`;
    newDiv.className='square';
    newDiv.style.width = squareSize + "px";
    newDiv.style.height = squareSize + "px";
}

function createGrid(setSize) {
    var numSquares=1;
    for (let row =0; row<setSize*setSize;row++){
            addSquare(numSquares);
            numSquares++;
    }
}

function destroyGrid(firstNode){
    while(firstNode.firstChild){
        firstNode.removeChild(firstNode.lastChild);
    }
}

const getBtn = document.querySelector(".btn");
getBtn.addEventListener("click", function() {
    let getColValue = document.getElementById("col-name").value;
    if (getColValue>100) {alert("Maximum Grid Size: 100");return ;}
    setSize = getColValue;
    const firstNode = document.querySelector(".grid");
    destroyGrid(firstNode);
    createGrid(setSize);
    
  });

grid.addEventListener("mouseover", (event) => {
        event.target.style.backgroundColor="black";
 });


