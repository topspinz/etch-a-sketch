document.body.onload = createGrid;

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
    newDiv.className=`square-${numSquares}`;
    const currentDiv = document.querySelector(".col");
    currentDiv.insertAdjacentElement('afterbegin',newDiv);
}

function createGrid() {
    var numSquares=1;
    for (let row =0; row<5;row++){
        addRow();
        for (let col=0;col<5;col++){
            addCol();
            addSquare(numSquares);
            numSquares++;
        }
    }
}
