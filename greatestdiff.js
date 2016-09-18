module.exports = {
  run:run
 
};

/**
 * find the greatest difference between numbers in an array
 * the difference has to be between the starting number and the numbers after it
 * and the later number has to be the larger number
 * this is from a stock market example
 * find the greatest profit you coudl have made from prices
 * but of course you have to buy first low and sell after high
 */
function run(){

    var la = [];
    for(var i = 0; i < 50000; i++){
        la.push(i * i);
    }
    console.time('slow way');
    console.log(slowWay(la));
    console.timeEnd('slow way');

    console.time('fast way');
    console.log(fastWay(la));
    console.timeEnd('fast way');

    var data = [5, 4,3,2,1];
    console.time('fast way 2');
    console.log(fastWay(data));
    console.timeEnd('fast way 2');
}
/**this is an example of the greedy approach
 * maintain some value as the comparison
 * look for "best answer so far"
 * maintain any other information that might help to prevent having to loop again
 */
function fastWay(ary){
    var max = 0;
    //maintain the lowest value seen in the past
    //you are maintaining max value so it doesn't matter if the min changes to something else
    //the max will always be the max that has been seen so far.

    //if you cared you could also maintain the max and min index 
    var min = ary[0];
    for(var i = 1; i < ary.length; i++){
        
        var diff = ary[i] - min;
        max = Math.max(max,diff)
        min = Math.min(ary[i],min)
    }
    return max;
}
//just the basic standard way to do every algorithm
//nested loops, nothing special
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