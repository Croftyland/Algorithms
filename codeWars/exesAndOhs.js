function XO(str) {
    var sum = 0
    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "o") {
            sum++
        } else if (str[i].toLowerCase() === "x") {
            sum--
        }
    }
    return sum === 0
}