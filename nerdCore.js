// Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"


function nerdify(txt){
  let nerdCore = txt;
  console.log(nerdCore)

  nerdCore.replace(/a | A/, "4");console.log(nerdCore);
  nerdCore.replace(/e |E/, "3");
  nerdCore.replace(/l | L/, "1");


  return nerdCore
}

// this doesn't function properly sooo I asked GPT!

//The reason why the code is not returning "S3v3n" is that the replace method does not modify the original string but instead returns a new string with the replacements made. Therefore, the nerdCore variable is never updated with the modified string.

// To fix this, you can assign the result of each replace operation back to the nerdCore variable, like this:

function nerdify(txt){
    let nerdCore = txt;
  
    nerdCore = nerdCore.replace(/a|A/g, "4");
    nerdCore = nerdCore.replace(/e|E/g, "3");
    nerdCore = nerdCore.replace(/l/g, "1");
  
    return nerdCore;
  }
  
  console.log(nerdify("Seven")); // returns "S3v3n"
  //In the above code, I have also made the following changes:

//   Added the g flag to each regular expression, which means that all occurrences of the pattern will be replaced, not just the first one.

//   Removed the spaces between the pipe (|) characters in the regular expressions. These spaces were causing the regular expressions to match spaces in the input string, which is not what you want.

// With these changes, the function should work as expected.

// best practice from CodeWars:

const nerdify = t => t.replace(/[aelAE]/g, a => ({'a': 4, 'e': 3, 'l':1 }[a.toLowerCase()]));

//or 

const nerdify = txt =>
  txt.replace(/a/gi, `4`).replace(/e/gi, `3`).replace(/l/g, `1`);