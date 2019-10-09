function f(arr) {
    let y = arr.findIndex(element => element.includes('O'));
    let x = arr[y].indexOf('0');

    return move(arr, x, y)
}

function move(arr, x, y, score = 0 ) {
  if (y < 2) return score;

  let left = arr[y - 1][x - 1] === 'X' && arr[y - 2][x - 2] === '_'
  ? move(arr, x-2,y-2, score + 1) : score;

  let right = arr[y - 1][x + 1] === 'X' && arr[y - 2][x - 2] === '_'
      ? move(arr, x+2,y-2, score + 1) : score;

  return Math.max(left,right)
}