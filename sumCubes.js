// Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.

// Assume that the input n will always be a positive integer.

// Examples: (Input --> output)

// 2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
// 3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)

// prep - params, return, examples(?), pseudocode

//n is always a positive integer.
//function needs to sum all the cubed values from 1 to n, using a for loop 
//return the sum 

function sumCubes(n){
    // ...
//n is always a positive integer.
//function needs to sum all the cubed values from 1 to n, using a for loop. 
//return the sum
    let sum = 0
    for (let i = 1 ; i <= n; i++){
        let cube = (i * i * i);
        cube += sum;
    }
    return sum
  }
//fail :(

//solutions. Best practice:
function sumCubes(n){
    if (n == 1) {
      return n**3;
    } else {
      return n**3 + sumCubes(n - 1);
    }
  }

  // most clever

  function sumCubes(n) {
    return (n * (n + 1) / 2) ** 2;
  }

  //post mortemus: I don't think I properly defined the problem. Again, I was getting too complex and not focusing on how to actually solve the problem most efficiently, instead reaching for tools I've used recently.