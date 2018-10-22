function declareWinner(fighter1, fighter2, firstAttacker) {
    while (fighter1.health > 0 && fighter2.health > 0) {
        fighter2.health -= fighter1.damagePerAttack;
        fighter1.health -= fighter2.damagePerAttack;
    }

    if (fighter1.health <= 0 && fighter2.health <= 0)
        return firstAttacker;
    else if (fighter1.health <= 0)
        return fighter2.name;
    else
        return fighter1.name;
}

function Fighter(name, health, damagePerAttack) {
    this.name = name;
    this.health = health;
    this.damagePerAttack = damagePerAttack;
    this.toString = function() {
        return this.name;
    };
}
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")); //, "Lew"
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Harry")); //, "Harry"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harry")); //, "Harald"
console.log(declareWinner(new Fighter("Harald", 20, 5), new Fighter("Harry", 5, 4), "Harald")); //, "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Jerry")); //, "Harald"
console.log(declareWinner(new Fighter("Jerry", 30, 3), new Fighter("Harald", 20, 5), "Harald")); //, "Harald"*/