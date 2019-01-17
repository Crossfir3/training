var n = 1
var s = [1, 2, 1, 3, 2];
var d = 3;
var m = 2;

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

var a = combRep(s, m);
var newArr1 = [];

a.forEach(function(item,index) {
  item = item.reduce(function(a, b) {
    return a + b;
  });
  if ([item] == d) {newArr1.push(a[index])};
});
//if ()
console.log(newArr1);
console.log(newArr1.length);

var newArr2 = [];

s.forEach(function(item,index) {
  item = s.reduce(function(a, b) {
    return a + b;
  });
  if ([item] == 9) {newArr2.push(s[index])};
});

console.log(newArr2);
