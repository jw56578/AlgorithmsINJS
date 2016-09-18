
var endOfLine = require('os').EOL;

module.exports = {
  run:run
 
};
/**
 * how many ways can you add up given numbers to equal a given sum
 * you would loop starting at the highest 
 * devide the sum by the denom
 * 
 * i have no idea how this works

 */
function run(){
  
  var numberstouse = [1,2,3];
  
  var sum = 4;

  var answer = new Change().changePossibilitiesTopDown(4, [1, 2, 3]);


}
  function Change() {
    this.memo = {};
}

Change.prototype.changePossibilitiesTopDown = function(amountLeft, denominationsLeft) {

    // check our memo and short-circuit if we've already solved this one
    var memoKey = String([amountLeft, denominationsLeft]);
    if (this.memo.hasOwnProperty(memoKey)) {
        console.log('grabbing memo[' + memoKey + ']');
        return this.memo[memoKey];
    }

    // base cases:
    // we hit the amount spot on. yes!
    if (amountLeft === 0) return 1;

    // we overshot the amount left (used too many coins)
    if (amountLeft < 0) return 0;

    // we're out of denominations
    if (denominationsLeft.length === 0) return 0;

    console.log('checking ways to make ' + amountLeft + ' with ' + denominationsLeft);

    // choose a current coin
    var currentCoin = denominationsLeft[0];
    var restOfCoins = denominationsLeft.slice(1);

    // see how many possibilities we can get
    // for each number of times to use currentCoin
    var numPossibilities = 0;
    while (amountLeft >= 0) {
        //at this point how does amount left ever get reduced since it seems it would loop forever
        //because denominationsLeft gets sliced
        numPossibilities += this.changePossibilitiesTopDown(amountLeft, restOfCoins);
        amountLeft -= currentCoin;
    }

    // save the answer in our memo so we don't compute it again
    this.memo[memoKey] = numPossibilities;
    return numPossibilities;
};