  function solve (lostFights, helmet, sword, shield, armor) {
    let expenses = 0
    for (let fight = 1; fight<=lostFights; fight++) {
        if (fight % 2 == 0) {
            expenses+=helmet
        }
        if (fight % 3 == 0) {
            expenses+=sword
        }
        if (fight % 6 == 0) {
            expenses+=shield
        }
        if (fight % 12 == 0) {
            expenses+=armor
        }
    }
    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
  }
  solve (7,

    2,
    
    3,
    
    4,
    
    5)