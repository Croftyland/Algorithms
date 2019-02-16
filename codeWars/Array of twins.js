/*
You are given an array of numbers. Check if the array contains of pairs, i.e every number occurs exactly two times. 
If true, return true, otherwise false. 
Your solution should not modify the input array.
*/
function twins(myArray){
  let arr = Array.from(myArray), l = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let a = arr.filter(val => val === arr[i]);
    if ((a.length) !== 2) { return false; }
  }  
  return true;
}
