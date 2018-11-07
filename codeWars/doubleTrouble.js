function trouble(x, t) {
    for (var j=0; j <= x.length; j++) {
        for (var i = 0; i < x.length - 1; i++) {
            if (x[i] + x[i + 1] == t)
                x.splice(i + 1, 1);
        }
    }
    return x;
}

function trouble(x, t){
    let i = 0, l = x.length - 1;
    while (i < l) {
        if (x[i] + x[i + 1] === t) {
            x.splice(i + 1, 1);
        } else {
            i++;
        }
    }
    return x;
}