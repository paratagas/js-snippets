function createMatrixCols(amount, symbol) {
  let row = '';

  for (let i = 0; i < amount; i++) {
    row += `${symbol} `;
  }

  console.log(row);
}

function createSlicedMatrixCols(amount, spaceCounter, signCounter, symbol, order) {
  let row = '';
  // console.log('spaceCounter: ', spaceCounter);
  // console.log('signCounter: ', signCounter);

  function addSpace () {
    let row = '';
    
    for (let i = 0; i < spaceCounter; i++) {
      row += `  `;
    }

    return row;
  }

  function addSign () {
    let row = '';
    
    for (let i = 0; i < signCounter; i++) {
      row += `${symbol} `;
    }

    return row;
  }

  if (order) {
    row += addSpace();
    row += addSign();
  } else {
    row += addSign();
    row += addSpace();
  }

  console.log(row);
}

function createMatrixRows(amount, symbol) {
  for (let i = 0; i < amount; i++) {
    createMatrixCols(amount, symbol);
  }

  console.log('\n');
}

function createSlicedMatrixRows(amount, symbol, order) {
  let spaceCounter = amount - 1;
  let signCounter = 1;

  for (let i = 0; i < amount; i++) {
    createSlicedMatrixCols(amount, spaceCounter, signCounter, symbol, order);
    spaceCounter -= 1;
    signCounter += 1;
  }

  console.log('\n');
}

/**
 * Creates matrix of symbols
 *
 * Time complexity: O(n2)
 *
 * @param {number} amount Matrix side size
 * @param {string} symbol Symbol to repeat
 */
function createMatrixOfSymbols(amount, symbol) {
  createMatrixRows(amount, symbol);
}

/**
 * Creates sliced matrix of symbols
 *
 * Time complexity: O(n2)
 *
 * @param {number} amount Matrix side size
 * @param {string} symbol Symbol to repeat
 * @param {boolean} order Order of slicing, by default - empty, then symbols
 */
function createSlicedMatrixOfSymbols(amount, symbol, order = true) {
  createSlicedMatrixRows(amount, symbol, order);
}

/* export: */
exports.createMatrixOfSymbols = createMatrixOfSymbols;
exports.createSlicedMatrixOfSymbols = createSlicedMatrixOfSymbols;
