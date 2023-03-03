// Write a function that accepts an array of 10 integers (between 0 and 9), that 

// returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!


// function createPhoneNumber(numbers){
//     console.log(numbers);

//     let parenth = numbers.map(x => );
//         firstThree = numbers.slice(3, 5);
//         lastFour = numbers.slice(6,9);

//     let newNum = `(${parenth}) ${firstThree}-${lastFour}`;

//     console.log(newNum.toString());
//     return newNum.toString();
// }

//wait wait wait. you're getting too crazy

function createPhoneNumber(numbers){
    //assign the format
    var format = "(xxx) xxx-xxxx";
    
    //for the length of the number use x as a target to replace with the corresponding array index
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }
