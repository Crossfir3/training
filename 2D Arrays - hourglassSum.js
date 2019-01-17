
function hourglassSum(arr) {
    var allSums = [];
    var ArrayManipulation = {
        hourglassSum: function (arr, coord1, coord2) {
            var sum = 0;
            sum = sum + arr[coord1][coord2] + arr[coord1][coord2 + 1] + arr[coord1][coord2 + 2] + arr[coord1 + 1][coord2 + 1] + arr[coord1 + 2][coord2] +
                arr[coord1 + 2][coord2 + 1] + arr[coord1 + 2][coord2 + 2];
            return sum;
        }
    }
    
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            allSums.push(ArrayManipulation.hourglassSum(arr, i, j));
        }
    }
    var result = Math.max(...allSums);

    return result;
}