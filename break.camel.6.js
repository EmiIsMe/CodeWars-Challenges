// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function

function solution(string) {
    return string.split(/(?=[A-Z])/).join(' ')
}

//brilliant! Fuckin aces, got it in 20 with some heavy googling.

//best practice:
function solution(string) {
    return(string.replace(/([A-Z])/g, ' $1'));
  }