// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Implement the method stray which accepts such array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

function stray(array){
    debugger;
    for(var i = 0; i < array.length; i++){
        if(array[i] === array[i+1]){
            if(array[i] === array[i+2]){
            } else {
                return array[i+2];
            }
        } else if(array[i] !== array[i+2]){
            return array[i]
        }
    }
}

stray([17, 17, 17, 17, 3, 17, 17]); // 3