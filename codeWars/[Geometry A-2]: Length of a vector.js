/*
For a given 2D vector described by cartesian coordinates of its initial point and terminal point in the following format:

[[x1, y1], [x2, y2]]

Your function must return this vector's length represented as a floating point number.

Error must be within 1e-7.

Coordinates can be integers or floating point numbers.
*/
function vectorLength(vector){
  return Math.sqrt(Math.pow(vector[1][1] - vector[0][1], 2) + Math.pow(vector[1][0] - vector[0][0], 2));
}
