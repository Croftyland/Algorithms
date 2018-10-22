function tickets(peopleInLine) {
    var changeIn25 = 0;
    var changeIn50 = 0;
    for(var i = 0; i < peopleInLine.length; i++) {
        var payment = peopleInLine[i];
        if (payment === 100) {
            if (changeIn25 < 75 && changeIn50 < 50) {
                return "NO";
            } else if (changeIn50 >= 50 && changeIn25 >= 25) {
                changeIn50 -= 50;
                changeIn25 -= 25;
            } else if (changeIn25 >= 75) {
                changeIn25 -= 75;
            }
        } else if (payment === 50) {
            if (changeIn25 === 0) {
                return "NO"
            } else {
                changeIn25 -= 25;
                changeIn50 += 50;
            }
        } else if (payment === 25) {
            changeIn25 += 25;
        }
    }
    return "YES";
}


function Clerk(name) {
    this.name = name;

    this.money = {
        25 : 0,
        50 : 0,
        100: 0
    };

    this.sell = function(element, index, array) {
        this.money[element]++;

        switch (element) {
            case 25:
                return true;
            case 50:
                this.money[25]--;
                break;
            case 100:
                this.money[50] ? this.money[50]-- : this.money[25] -= 2;
                this.money[25]--;
                break;
        }
        return this.money[25] >= 0;
    };
}

function tickets(peopleInLine){
    var vasya = new Clerk("Vasya");
    return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}