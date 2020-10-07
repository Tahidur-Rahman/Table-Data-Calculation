let sum = 0,
    cells = document.querySelectorAll('td +td'),
    table = document.getElementById('table1');

    // summing all the table data by looping 
for(let d of cells){
  sum += +d.firstChild.data
}

// row and column creation
let newRow = document.createElement('tr'),
    firstCol = document.createElement('td'),
    secondCol = document.createElement('td');

// data insertion for the columns
let firstColText = document.createTextNode('Sum : '),
    secondColText = document.createTextNode(sum);

// TextNode insertion on the Column
  firstCol.appendChild(firstColText)
  secondCol.appendChild(secondColText)

  firstCol.classList = 'table-danger'
  secondCol.classList = 'table-secondary'

// column Insertion
newRow.appendChild(firstCol);
newRow.appendChild(secondCol);

console.log(newRow)
table.appendChild(newRow)