function selectionsort(arr) { 
  let n = arr.length;
      
  for(let i = 0; i < n; i++) {
      // Finding the smallest number in the subarray
      let min = i;
      for(let j = i+1; j < n; j++){
          if(arr[j] < arr[min]) {
              min=j; 
          }
       }
       if (min != i) {
           // Swapping the elements
           let tmp = arr[i]; 
           arr[i] = arr[min];
           arr[min] = tmp;      
      }
  }
  return arr;
}

function selectionSort(arr) {
  const sorted = [];

  while (arr.length > 0) {
    const min = Math.min(...arr);
    const idx = arr.indexOf(min);

    sorted.push(min);
    arr.splice(idx, 1);
  }

  return sorted;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// https://stackabuse.com/selection-sort-in-javascript/