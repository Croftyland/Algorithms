/*
Why would we want to stop to only 50 shades of grey? Let's see to how many we can go.

Write a function that takes a number n as a parameter and return an array containing n shades of grey 
in hexadecimal code (#aaaaaa for example). The array should be sorted in ascending order starting with 
#010101, #020202, etc. (using lower case letters).

function shadesOfGrey(n){
  // returns n shades of grey in an array
}

As a reminder, the grey color is composed by the same number of red, green and blue: #010101, #aeaeae, 
#555555, etc. Also, #000000 and #ffffff are not accepted values.

When n is negative, just return an empty array. If n is higher than 254, just return an array of 254 elements.

Have fun
*/
function shadesOfGrey(n){
  let a = [];
  for (let g = 1; g <= n; g++) {
    let hex = g.toString(16);
    hex = (hex.length === 1) ? '0' + hex : hex;
    a.push('#' + hex.repeat(3));
    if (hex === 'fe') { break; }
  }
  return a;
}
