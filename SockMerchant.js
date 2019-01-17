var ar = [10, 11, 20, 20, 10, 10, 30, 50, 10, 20, 101];
var n =  ar.length;
function sockMerchant(n, ar) {
    var sortedArray = ar.sort(function (a, b) { return a - b });
    var countUni = {};
    var count = 0;

    sortedArray.forEach(function(i) { 
        countUni[i] = (countUni[i]||0) + 1;
    });
    
    let a = [...Object.values(countUni)];

    for (var i = 0; i < Object.keys(countUni).length; i++){
        if (a[i] > 1) {
            count = count + (Math.floor(a[i] / 2));
        }
    }
    return count;
}

console.log(sockMerchant(n,ar));
