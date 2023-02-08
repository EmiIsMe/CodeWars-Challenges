// This function should return an object, but it's not doing what's intended. What's wrong? 

//lmao this is fuuuuuckeeed its the return placement isn't it? WOOOOW. Can't believe that took me so long.
function mystery() {
    var results =
      {sanity: 'Hello'};
    return 
        results;
  }
// return needs stuff on the same line, everything else is FINE.

  function mystery() {
    var results =
      {sanity: 'Hello'};
    return results;
  }