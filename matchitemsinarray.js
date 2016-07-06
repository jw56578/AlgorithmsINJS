module.exports = {
  run:run
 
};

/*
this is the simplest example i can think of in terms of an algorithm using arrays
this is along the lines of problems that use data in arrays and ask you to find something
out 
for example: given an array of integers, find the largest sum between any 2 integers
all of these types of things can be solved by a nested loop which is of course the easiest 
but slowest way to do item
how do you use your brain to think of better ways to do these things when you aren't good at math
or don't think that way.

this is the first thing to think about
any way that you can use an array index to look something up is the best thing to do
accessing an array index is the fastest way possible in a computer to "look something up"

for example if you can use the id of a type such as Person to be the index of the array 
where you store that person, you can find people by id very fast.
finding a way to reprsent some data in an integer format so that it can be stored in an array
is the trick of this concept
if you have a unique integer that is great
or if you have something to do with time, seconds from a start point
or if you can hash a string into a number


but this causes memory issues because you have a fragmented array
and probably larger array than necessary.

*/
function run(){
    var la = [];
    var la2 = [];

    //get it so the loop runs in a few seconds and finds the thing int the midddle
    //this represents the average time needed to find a thing at random
    for(var i = 0; i < 100000; i++){
        la.push(i);
    }
    for(var i =100000; i < 200000; i ++){
        if(i === 155555)
            la2.push(55555);
        else
            la2.push(i);
    }

    //this takes 5 seconds
    console.time('find thing in array brute force');
    bruteForce(la,la2);
    console.timeEnd('find thing in array brute force');

    //this takes 23 miliseconds
    console.time('using array index');
    useArrayIndex(la,la2);
    console.timeEnd('using array index');

}
function useArrayIndex(ary1,ary2){
    //this might look confusing because you are putting the value of the item in the array as the index
    //the value happens to be an integer which is what the index of an array is
    //but it could be that you weren't using integers, maybe you were using types
    //and you had to put the id of the type as the index
    var arrayOfIndex = [];
    for(var i = 0; i < ary2.length; i ++){
        arrayOfIndex[ary2[i]] = true;    
    }
    for(var i = 0; i < ary1.length; i ++){
        var exists = arrayOfIndex[ary1[i]];
        if(exists===true){
            console.log(ary1[i]);
            return;
        }
    }

}

function bruteForce(ary1,ary2){
  //this is the fastest way to brute force loop through 2 arrays looking to 
  //see if one item is in another
  //return early to keep it as simple as possible
  //just want to find one match
  var l = ary1.length;
  while(l--){
      var l2 = ary2.length;
      while(l2--){
          if(ary1[l] === ary2[l2]){
              console.log(ary1[l]);
              return;
          }

      }

  }
}


