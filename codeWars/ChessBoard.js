/*
Write a function that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a “#” character (black='#', black always starts top/left). 
The characters should form a chess board.

When you have a program that generates this pattern, define a variable size = 8 and change the program 
so that it works for any size, outputting a grid of the given width and height.
*/
function board(size = 8) {
  let str = '';
  for (let i = 1; i <= size; i++){
    for (let j = 1; j <= size; j++){
      str += (j + i) % 2 ? ' ' : '#';
    }
    str += '\n';
  }
  return str;
}
