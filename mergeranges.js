
module.exports = {
  run:run
 
};
function run(){
    var meetings = [
        {startTime: 1, endTime: 10},
        {startTime: 2, endTime: 6},
        {startTime: 3, endTime: 5},
        {startTime: 7, endTime: 9},
    ]
    //1 through 10 covers everything so there should only be one things
    var merged = mergeRanges(meetings) ;
    meetings = [
            {startTime: 2, endTime: 6},
            {startTime: 3, endTime: 5},
            {startTime: 7, endTime: 9},
        ]
        //there is a break between 6 and 7 so those can't merge and this should return 2 things
    merged = mergeRanges(meetings) ;
}
/**this example was about how to merge the time ranges of meetings, but i guess it can be used to merge any type of number ranges
 * first you sort on the start of the range to know for sure what things are next to each other
 * then you create an array of new ranges
 * start the array with the first existing range
 * if a ranges start value is less than or equal to the previous ones then the ranges overlap
 *          change the end time of the previous range to the new range
 * else there is no overlap so add a new entry in the array of ranges
 */
function mergeRanges(meetings) {

    // sort by start times
    var sortedMeetings = meetings.slice().sort(function(a, b) {
        return a.startTime > b.startTime ? 1 : -1;
    });

    // initialize mergedMeetings with the earliest meeting
    var mergedMeetings = [sortedMeetings[0]];

    for (var i = 1; i < sortedMeetings.length; i++) {

        var currentMeeting    = sortedMeetings[i];
        var lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

        // if the current and last meetings overlap, use the latest end time
        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);

        // add the current meeting since it doesn't overlap
        } else {
            mergedMeetings.push(currentMeeting);
        }
    }

    return mergedMeetings;
}