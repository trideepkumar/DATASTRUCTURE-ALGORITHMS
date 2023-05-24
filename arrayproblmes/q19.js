// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

const negativeCount = (matrix) => {
    let count = 0
    let row = matrix.length
    let column = matrix[0].length
    for(let i=0 ; i<row ; i++){
        for(let j = 0 ; j<column ;j++){
            if(matrix[i][j] < 0){
                count++
            }
        }
    }
    return count
}

const matrix = [[4,3,2,-1],[3,2,1,-9],[1,1,-1,-2],[-1,-1,-2,-3]]

const result = negativeCount(matrix)

console.log(result)