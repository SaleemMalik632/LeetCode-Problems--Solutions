// Version: 1.0
var numSubmatrixSumTarget = function (matrix, target) {
    let count = 0;
    let sum_matrix = null;
    let sum = 0;
    let sum2 = 0;
    if (matrix[0].length === 2 && matrix[1].length === 2) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                sum = sum + matrix[i][j]
                sum_matrix += matrix[i][j] 
                console.log('sum_matrix', sum_matrix)
            }

            for (let j = 0 ; j<matrix[i].lenght; j++) {
                 sum = sum + matrix[i][j]
                sum_matrix += matrix[i][j]
                console.log(sum_matrix)
            }



            if (sum == target) {
                count = count + 1;
            }
            for (let k = 0; k < matrix.length; k++) {
                sum2 = sum2 + matrix[k][i]
            }
            if (sum2 == target) {
                count = count + 1;
            }
            sum = 0;
            sum2 = 0;
        }
        if(sum_matrix === target){
            count = count + 1;
        }
    }
    return count
};

matrix = [[1,-1],[-1,1]]
target = 0
console.log(numSubmatrixSumTarget(matrix, target))