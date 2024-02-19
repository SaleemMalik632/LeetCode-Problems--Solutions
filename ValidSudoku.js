var isValidSudoku = function (board) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                if (board[i][j] < 9) {
                    if( board[i][j] == board[j+1][i] ){
                        console.log(board[i][j] + ' ' + board[j+1][i])
                        return false;
                    }
                }  
            }
        }
    }
    // for (let box = 0; box < 9; box++) {
    //     const boxSet = new Set();
    //     const startRow = Math.floor(box / 3) * 3;
    //     const startCol = (box % 3) * 3;
    //     for (let i = startRow; i < startRow + 3; i++) {
    //         for (let j = startCol; j < startCol + 3; j++) {
    //             if (board[i][j] !== '.') {
    //                 if (boxSet.has(board[i][j])) {
    //                     return false; // Duplicate found in sub-box
    //                 } else {
    //                     boxSet.add(board[i][j]);
    //                 }
    //             }
    //         }
    //     }
    // }
    return true;
};




// Example usage:
const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

console.log(isValidSudoku(board)); // Output: true