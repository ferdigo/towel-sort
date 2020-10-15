
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let arr = []
    if(matrix === undefined) return arr
    matrix.forEach((item, index, array) => {
        if(index%2 !== 0){
         item.reverse()
        }
    });
      
        for(let i = 0; i <matrix.length; i++){
          console.log(matrix[i])
          for (let j = 0; j < matrix[i].length; j++){
            arr.push(matrix[i][j])
          }
        }
      
    return arr
    

}
