// You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

// You are using a library (Game.Logic in C#) that already has the functions below. Create a function named doTurn/DoTurn/do_turn that calls the functions in the proper order as described in the paragraph above.

// - combat
// - buyHealth
// - getCoins
// - printStatus
// - rollDice
// - move
//My solution
const doTurn = () => {
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus();
}

// best practice
const doTurn = () => {
    rollDice()
    move()
    combat()
    getCoins()
    buyHealth()
    printStatus()
  }

  //clever
  function doTurn () {
    var actions = [rollDice, move, combat, getCoins, buyHealth, printStatus];
    actions.forEach(e => e());
  }
  //interesting

  function *callTurnGen () {
    yield rollDice()
    yield move()
    yield combat()
    yield getCoins()
    yield buyHealth()
    yield printStatus()
}
const callTurn = callTurnGen()
const doTurn = () => {
  while(!callTurn.next().done);
}

//what I learned: 
//Okay, there's a ton of ways to do this but arrow functions are still driving me up a wall. Also, functions don't need to be (or can't be)strung together in the way I originally concieved, which I guess is unique to arguing using a param.