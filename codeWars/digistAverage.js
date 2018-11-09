// Given an integer, take the (mean) average of each pair of consecutive digits.
// Repeat this process until you have a single integer, then return that integer.
// e.g.
//
//     Note: if the average of two digits is not an integer,
// round the result up (e.g. the average of 8 and 9 will be 9)
//
// Examples
//
// digitsAverage(246)  ==>  4
//
// original: 2   4   6
//            \ / \ /
// 1st iter:   3   5
//              \ /
// 2nd iter:     4
//
//
// digitsAverage(89)  ==>  9
//
// original: 8   9
//            \ /
// 1st iter:   9


function digitsAverage(input) {
    input = input.toString().split("").map(Number)
    return average(input)
}

function average(input){
    if (input.length == 1){
        return input[0];
    }
    var aver = [];
    for (var i=0; i<input.length-1; i++){
        aver.push(Math.ceil((input[i]+input[i+1])/2))
    }

    return average (aver)
}