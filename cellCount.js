// A researcher is studying cell division in a large number of samples. Counting the cells in each sample is automated, but when she looks at the data, she immediately notices that something is wrong.

// The data are arrays of integers corresponding to the number of cells in the sample over time. The first element data[0] is the initial count. The next element data[1] is the cell count at a later time. data[2] is the next count, and so on.

// The cells are reproducing, so the elements of the array are supposed to be non-decreasing (there is no cell death), but the automatic cell counter has undercounted. In fact, the researcher has verified that the counter undercounts by 1 at random. The error rate is unknown.

// Your task is to create a new non-decreasing array that is minimally different from the data array. For example, if the data = [1, 1, 2, 2, 1, 2, 2, 2, 2] then the returned array should be [1, 1, 2, 2, 2, 2, 2, 2, 2] because data[4] < data[3] is clearly an error.

// The first entry of the array is correct, and does not require an adjustment.
// The array will never be empty.

//plan: go through whole array, check each element to see if it's equal to the the one before it OR after it, if it is add 1, return a new array 
function cleanedCounts(data) {
    const correctData = data.map( i =>  data[i] == data[i--] || data[i++] ? i : i++ )
    console.log(correctData);
    return correctData;

  }

// after 20 mins errors thrown:
// Test Results:
// Noisy Cell Counts
// should not modify input array
// Log
// [ 9, 10, 9 ]
// cleanedCounts [10,11,10]: expected [ 9, 10, 9 ] to deeply equal [ 10, 11, 11 ]
// Completed in 4ms
// example tests
// Log
// [
//   0, 0, 1, 1, 0,
//   1, 1, 1, 1
// ]
// cleanedCounts [1,1,2,2,1,2,2,2,2]: expected [ +0, +0, 1, 1, +0, 1, 1, 1, 1 ] to deeply equal [ 1, 1, 2, 2, 2, 2, 2, 2, 2 ]
// Completed in 1ms
// Completed in 5ms


// solutions
function cleanedCounts(a){
    let m = 0
    return a.map(e=>m=Math.max(e,m))
  }

// or 

const cleanedCounts = (data,number = 0) =>
  data.map(element => number = Math.max(element,number))
/*function cleanedCounts(data) {
  let result = [],
      number = 0
  for (let i = 0; i < data.length; i++) {
    if (data[i] < number) {
      result.push(number)
    } else {
      result.push(data[i])
      number = data[i]
    }
  }
  return result
}*/