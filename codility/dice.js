function dices (arr) {
    let count = arr.length * 3;
    for (let i = 0; i <= 6; i++) {
    count = Math.min(count, flip(arr, i))
    }
    return count
}

function flip (array , n) {
    return array.filter(element => element !== n)
        .map(element => element === 7 - n ? 2 : 1)
        .reduce((acc, element) => acc + element,0)
}


