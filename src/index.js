
// You should implement your task here.

module.exports = function towelSort (matrix) {
matrix.forEach((item, index, array) => {
    if(index%2 !== 0){
        item.sort((a,b) => a-b)
    }

});
    

return matrix.flat(2)//.sort((a,b) => a-b)

}
