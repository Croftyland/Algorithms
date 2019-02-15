/*
Given a string, capitalize the letters that occupy even indexes and odd indexes separately, 
and return as shown below. Index 0 will be considered even.

For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

The input will be a lowercase string with no spaces.

Good luck!

If you like this Kata, please try:

Indexed capitalization
Even-odd disparity
*/
function capitalize(s){
  let res1 = '', res2 = '';
  s.split('').forEach(function(v, i){
    v = (i % 2) ? v.toLowerCase() : v.toUpperCase();
    res1 += v;
    res2 += v.toOtherCase();
  });
  return [res1, res2];
};

String.prototype.toOtherCase = function(){
  return (this.toLowerCase() == this) ? this.toUpperCase() : this.toLowerCase();
}
