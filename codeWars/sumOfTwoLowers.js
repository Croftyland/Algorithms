 function sumTwoSmallestNumbers(numbers) {
    for(var i = 0; i < numbers.length; i++){
        var lowest = i;
        for(var j = i+1; j < numbers.length; j++){
            if(numbers[j] < numbers[lowest]){
                lowest = j;
            }
        }
        if(i !== lowest){
            //SWAP!
            var temp = numbers[i];
            numbers[i] = numbers[lowest];
            numbers[lowest] = temp;
        }
        sum = numbers[0] + numbers[1];

    }
return sum;

}
sselectionSort([8, 4, 2, 1, 22]);