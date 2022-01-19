const transpose = function(matrix) {
    // Sarah/Barento tag team effort here
    let newMatrix = [];
    for (let i = 0; i < matrix[0].length; i++){
      newMatrix.push([]);
    }
    // Barento's code
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++){
        newMatrix[col][row] = matrix[row][col];
      }
    }
    return newMatrix;
  };
  

const wordSearch = (letters, word) => { 
    if(typeof(word) !== "string" || letters.length === 0) {
        return undefined;
        }
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    if(typeof(word) === "string") {
        word = word.toUpperCase();
    }
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (l of verticalJoin) {
        if (l.includes(word)) return true
    }
 
   
    return false;
}

const result = wordSearch([    
        ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
        ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
        ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
        ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
        ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
        ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
        ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
        ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
        ],
        1234);

console.log(result);
module.exports = wordSearch