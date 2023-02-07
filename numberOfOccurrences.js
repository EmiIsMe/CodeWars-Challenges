// <!-- Write a function that returns the number of occurrences of an element in an array.

// This function will be defined as a property of Array with the help of the method Object.defineProperty, which allows to define a new method directly on the object (more info about that you can find on MDN). -->

// <!-- Examples
// var arr = [0, 1, 2, 2, 3];
// arr.numberOfOccurrences(0) === 1;
// arr.numberOfOccurrences(4) === 0;
// arr.numberOfOccurrences(2) === 2;
// arr.numberOfOccurrences(3) === 1; -->


   
Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(num) {
    //for each as an option? No, for each does not work with iterables.
    // Array.forEach( element => {
      
    // });

    //Maybe iterate through the array with a for loop and return the number of times an index matches the param: 

    // let sum = 0
    // for(let i = 0; i =< Array.length; i++){
    //   if(Array[i] === num){
    //     sum++;
    //   } 
    // }
    // return sum;

    // ^ this doesn't return 0 and is really complex. I'm giving up and going to stack overflow :(

    // return Array.filter(x => x===num).length;
    //??
    // The solution- drumroll please...

    Array.prototype.numberOfOccurrences = function(search) {
      return this.filter( function(num){ return search === num } ).length;
    }

  }
});

//I was SO close to implementing the stack overflow solution effectively- I forgot that working within a prototype I'd have to use 'this' for correct inheritance. 

// sheeeesshhhh.jpeg. I felt like my brain wheel was missing a wedge.

