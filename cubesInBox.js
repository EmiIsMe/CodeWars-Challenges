// Cubes in the box
// Your job is to
// write a function f(x,y,z)
//  to count how many cubes
// of any size
// can fit inside a x*y*z box. 

// For example, a 2*2*3 box has 12 1*1*1 cubes, 2 2*2*2 cubes, so a total of 14 cubes in the end.

// Notes:
// x,y,z are strictly positive and will not be too big.


// pseudo: First get the size of the box. Then iterate? dude I got no fucking idea.

// okay its a bin packing problem. Finite set I of items, a size, for each a positive bin capacity and a positive b integer k 


//I'm gonna level with ya, this one is HARD. Not to program but for me, mathematically.

//solution, because I banged head against wall for 30 minutes and have things to do with my day.

  function f(x,y,z){
    const s      = Math.min(x++, y++, z++)
    //uses Math.min  to return the smallest number given as params. Why are params iterated?
    const sumS   = s*(s+1)/2
    // sum the size
    const sumSq  = sumS*(2*s+1)/3
    //sum the squares
    const sumCub = sumS*sumS
    //sum the cubes
    return x*y*z*s - (x*y+x*z+y*z)*sumS + (x+y+z)*sumSq - sumCub
    //wtf. 
  }

//post mortem- this kicked my ass. Gotta ask for some help from the math nerds and figure out what's going on here. It's cool, but over my head right now.
