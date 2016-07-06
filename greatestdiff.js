module.exports = {
  run:run
 
};

/**
 * find the greatest difference between numbers in an array
 * the difference has to be between the starting number and the numbers after it
 * and the later number has to be the larger number
 */
function run(){

    var la = [];
    for(var i = 0; i < 50000; i++){
        la.push(i * i);
    }
    console.time('slow way');
    console.log(slowWay(la));
    console.timeEnd('slow way');
}
function slowWay(ary){
    var max = 0;
    for(var i = 0; i < ary.length; i++){
        for(var x = i + 1; x < ary.length; x++){
            var one = ary[i];
            var two = ary[x];
            var diff = two - one;
            max = Math.max(diff,max);
        }
    }
    return max;
}