function babyCount(x) {
    let arr  = x.toLowerCase().split("");
    let bs = 0;
    let as = 0;
    let ys = 0;
    let babies = 0;
    for (var ch of arr){
        if (ch == "b"){
            bs++;
        }
        if (ch == "a"){
            as++;
        }
        if(ch == "y"){
            ys++;
        }
        if (bs >= 2 && as >= 1 && ys >= 1){
            babies++;
            bs -= 2;
            as -= 1;
            ys -= 1;
        }
    }
    return babies > 0 ? babies : "Where's the baby?!";
}