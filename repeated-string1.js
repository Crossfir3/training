var s = 'aba';
var n = 10;
function repeatedString(s, n) {
    var countNormal = 0;
    var symbol = 'a';
    var result = 0;
    var divisor = n % s.length;
    var StringUtilities = {
        count: function(str, letter, len) {
            var count = 0;
            for (var i = 0; i < len; i++){
                if (str[i] == letter) {
                    count++;
                }
            } 
            return count;
        }
    };

    countNormal = StringUtilities.count(s, symbol, s.length);
    if (divisor == 0) {
        result = (n / s.length) * countNormal;
    } else {
        result = (Math.floor(n / s.length) * countNormal) + StringUtilities.count(s,symbol,divisor)
    }
    
    return result;
     
}

console.log(repeatedString(s,n));