function maxRot(n) {
//turn our number into an array
    var num = ('' + n).split('');
//create holder array so that later we can get the highest number in the array
    var holderArr = [n];

//loop through array
    for(var i = 0; i < num.length -1; i++){
//take whatever number is at i index of our num array and move it to the end until loop stops
        num.push(num.splice(i,1));
//push our num to our holder array as an integer
        holderArr.push(parseInt(num.join('')));
    }

//return the highest number in our holder array
    return Math.max.apply(num, holderArr);

}