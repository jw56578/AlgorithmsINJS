
module.exports = {
  run:run
 
};
function run(){
    var matrix;
    matrix = [
        [1,  2, 3, 4, 5],
        [6,  7, 8, 9,10],
        [11,12,13,14,15],
        [16,17,18,19,20],
        [20,21,22,23,24],
        ]
    var flatten = [];
    for(var i = 0; i < matrix.length; i ++){
        for(var a = 0; a < matrix[i].length; a ++){
            flatten.push(matrix[i][a]);
        }
    }

    var newGrid = [];
    var rowLength = Math.sqrt(flatten.length);
    newGrid.length =flatten.length

    for (var i = 0; i < flatten.length; i++)
    {
        //convert to x/y
        var x = i % rowLength;
        var y = Math.floor(i / rowLength);

        //find new x/y
        var newX = rowLength - y - 1;
        var newY = x;

        //convert back to index
        var newPosition = newY * rowLength + newX;
        newGrid[newPosition] = flatten[i];
    }

    /**
     * i knew there was an easy formula for the transformation but there is no way i could have figured that out myself
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * 
     * nope can't figure it out, SO it is
     * the first row/columns needs to go into the last column = add width
     * the first row second column needs to go into width * 2 - 2
     * the first row third column needs to go into width * 3 - 3
     * .....
     * the second row first columns needs to go into index - 2
     * the second row second columns needs to go into index + 2
     * the second row third coluumn goes into index + width + 1
     * the second row forth column goes into index + width * 2
     */

}