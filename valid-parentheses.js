function validParentheses(parenStr) {
    if (/* search the string and determine if parenthese appear */
    parenStr.search("()") == -1
    ){
        return false 
    }else{
        return true
    }
  }

//   // Test Results:
// Sample tests
// Should return true for valid parentheses
// Test Passed
// Completed in 1ms
// Should return false for invalid parentheses
// Test failed for input: ")(": expected true to equal false
// Completed in 1ms
// Should return true for empty strings
// Test Passed

// answers:
function validParentheses(parenStr) {
    let curr = 0;
    for(let i = 0; i < parenStr.length; i++) {
      if (parenStr[i] === '(') {
        curr++;
      } else {
        curr--;
      }
      if (curr < 0) {
        return false;
      }
    }
    return curr === 0;
  }