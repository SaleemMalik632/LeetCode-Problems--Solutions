// var rotate = function (matrix) {

//     let obj = {
//     }
//     var last = null
//     var  k = matrix.length
//     for (let i = 0; i < matrix.length; i++,k--) {
//         for (var j = 0; j < matrix.length; j++) {
//             if ( obj[j][k]) {
//                 last =  obj[j][k]
//             }
//             if (j === matrix.length - 1) {
//                 obj[j][k] = matrix[j][k] 
//                 matrix[j][k] = last
//             }
//             obj[j][k] = matrix[j][k]
//             matrix[j][k] = matrix[i][j]
//         }
//     }
//     return 
// };

// let = matrix = [[1,2,3],[4,5,6],[7,8,9]]
// // Output: [[7,4,1],[8,5,2],[9,6,3]]

// console.log(rotate(matrix))









var rotate = function (matrix) {
    const n = matrix.length;
    const obj = {}; // Use an object to store intermediate values

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (obj[j]) {
                // Store the last value
                obj[j][n - i - 1] = matrix[j][i];
            } else {
                obj[j] = { [n - i - 1]: matrix[j][i] };
            }
            matrix[j][i] = matrix[i][j];
        }
    }

    // Copy the rotated values back to the matrix
    for (let j = 0; j < n; j++) {
        for (let i = 0; i < n; i++) {
            matrix[j][i] = obj[j][i];
        }
    }
};

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
rotate(matrix);

console.log(matrix); // Output: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]

