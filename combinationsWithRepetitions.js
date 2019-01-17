function combRep(arr, l) {
  if(l === void 0) l = arr.length; // Length of the combinations
  var data = Array(l),             // Used to store state
      results = [];                // Array of results
  (function f(pos, start) {        // Recursive function
    if(pos === l) {                // End reached
      results.push(data.slice());  // Add a copy of data to results
      return;
    }
    for(var i=start; i<arr.length; ++i) {
      data[pos] = arr[i];          // Update data
      f(pos+1, i);                 // Call f recursively
    }
  })(0, 0);                        // Start at index 0
  return results;                  // Return results
}

var a = combRep([50,75,100,125,150,200,250,300,500],12);
var newArr1 = [];

a.forEach(function(item,index) {
  item = item.reduce(function(a, b) {
    return a + b;
  });
  if ([item] == 2500) {newArr1.push(a[index])};
});
console.log(newArr1);