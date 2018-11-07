// There is a war and nobody knows - the alphabet war!
// There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

// Task

// Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

// The left side letters and their power:

//  w - 4
//  p - 3
//  b - 2
//  s - 1
// The right side letters and their power:

//  m - 4
//  q - 3
//  d - 2
//  z - 1
// The other letters don't have power and are only victims.

// Example

// alphabetWar("z");        //=> Right side wins!
// alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
// alphabetWar("wwwwwwz");  //=> Left side wins!

function alphabetWar(fight) {
    // create objects for the left and right side so we can add the value
    let leftSideLetters = {
        w : 4,
        p : 3,
        b : 2,
        s : 1,
    }
    let rightSideLetters = {
        m : 4,
        q : 3,
        d : 2,
        z : 1,
    }
    let rightSum = 0; // we need to compare their sums in order t decide who won //
    // SUM OUTSIDE OF THE FOR LOOP, SO IT WOULD NOT BE ZERO EVERY TIME THE FOR LOOP RUNS
    let leftSum = 0;

    for ( let i = 0; i < fight.length; i++) {
        let elem = fight[i]
        // check if the elem exists inside of the obj each time
        if ( rightSideLetters[elem] ) {
            // if it exists add the values (rightSideLetters[elem])
            rightSum += rightSideLetters[elem]
        } else if ( leftSideLetters[elem]) {
            leftSum += leftSideLetters[elem]
        }
    }
    if ( rightSum > leftSum) {
        return 'Right side wins!'
    } else if ( leftSum > rightSum) {
        return 'Left side wins!'
    } else {
        return  "Let's fight again!"
    }

}
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
// alphabetWar("zzzzs");    //=> Right side wins!
//  alphabetWar("wwwwwwz");  //=> Left side wins!

