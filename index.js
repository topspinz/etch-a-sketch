document.body.onload = createGrid(16,16);

function addRow() {
  // create a new div element
  const newDiv = document.createElement('div');
  newDiv.className='row';
  const currentDiv = document.querySelector(".grid");
  currentDiv.insertAdjacentElement('afterbegin',newDiv);
}

function addCol() {
    const newDiv=document.createElement("div");
    newDiv.className="col";
    const currentDiv = document.querySelector(".row");
    currentDiv.insertAdjacentElement('afterbegin',newDiv);
}


function addSquare(numSquares) {
    const newDiv=document.createElement("div");
    newDiv.id=`square-${numSquares}`;
    newDiv.className='square';
    const currentDiv = document.querySelector(".col");
    currentDiv.insertAdjacentElement('afterbegin',newDiv);
}

function createGrid(x,y) {
    var numSquares=1;
    for (let row =0; row<x;row++){
        addRow();
        for (let col=0;col<y;col++){
            addCol();
            addSquare(numSquares);
            numSquares++;
        }
    }
}

const allItemsInClass = document.getElementsByClassName("square");

for (var i=0; i< allItemsInClass.length; i++ ) {
    allItemsInClass[i].addEventListener("mouseover", (event) => {
        document.getElementById(event.target.id).style.backgroundColor="black";
    });
  }

