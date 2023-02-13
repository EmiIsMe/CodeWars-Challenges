// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

// Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
// --the order is: uppercase letters, lowercase, numbers and special characters.

function solve(s){
    //..Use forEach or map- run through the string (str length) and check each character for conditions to add to an arrayed list.
    //for each or map => don't know them too well, don't want to get too fancy and don't think forEach can iterate.

    let upper = 0,
        lower = 0,
        number = 0,
        specialChar = 0;
    
        for (let i = 0; i < s.length; i++){
            if(s[i] >= "A" && s[i] <= "Z"){
                    upper++;
            }else if (s[i] >= "a" && s[i] <= "z") {
                    lower++;
            }else if (s[i] >= "0" && s[i] <= "9"){
                    number++;
            }else{
                    specialChar++;
            }
          
        let result = [upper,lower,number,specialChar];
        
    
    return  result;
    }
}

//post mortem
//ran into bugs and couldn't my 25 minutes mark. Solutions below :p
//closest: 
const solve = (s) => {
    let result = [0, 0, 0, 0];
    for (let i = 0; i < s.length; i += 1) {
      if (s[i].toLowerCase() > s[i]) {
        result[0] += 1;
      } else if (s[i].toUpperCase() < s[i]) {
        result[1] += 1;
      } else if (s[i] >= 0 && s[i] <= 9) {
        result[2] += 1;
      } else {
        result[3] += 1;
      }
    }
    return result;
  };

//best practice
const solve = x => {
    let u = x.match(/[A-Z]/g)||[]
    let d = x.match(/[a-z]/g)||[]
    let n = x.match(/[0-9]/g)||[]
    let s = x.match(/[^A-Z0-9]/gi)||[]
    return [u.length, d.length, n.length, s.length]
  }

//match seems cool! I'll check out how to use it, it seems to be exactly what I was looking for and didn't know how to reach.