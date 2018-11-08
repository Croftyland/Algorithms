/*
You are given an initial 2-value array (x). You will use this to calculate a score.

If both values in (x) are numbers, the score is the sum of the two. If only one is a number,
the score is that number. If neither is a number, return 'Void!'.

Once you have your score, you must return an array of arrays. Each sub array will be the same
as (x) and the number of sub arrays should be equal to the score.

For example:

if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/
function explode(x){
    let arr = x.filter(v => /^(\d)+$/g.test(v));
    if (!arr.length) return 'Void!';
    let score = arr.reduce((t, v) => t + v, 0);
    return Array.from({length: score}).fill(x);
}
