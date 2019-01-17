var s = 'epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq';
var n = 549382313570;
var symbol = 'a';

function repeatedString(s, n) {
    var multiplier = 0;
    //var divisor = Math.ceil(4200000000 / s.lengt);
    if (n <= 100000000) {
        multiplier = Math.ceil(n / s.length);
    } else {
        multiplier = (Math.ceil(n / s.length)) / 10000;
    };

    var megaString = '';
    var result = 0;
    var StringUtilities = {
        repeat: function(str, times) {              // Maximum possible n <= 100 000 000 
            var string1 = '';                       // speacialCount used for bigger numbers
            for (var i = 1; i <= times; i++) {      // due to string length limitations
                string1 = string1 + str;
            }
            return string1;
        },

        count: function(str, letter, len) {
            var count = 0;
            for (var i = 0; i < len; i++){
                if (str[i] == letter) {
                    count++;
                }
            } 
            return count;
        },

        speacialCount: function(count, multi) {
            var count1 = count * multi;
            return count1;
        }
    };
    megaString = StringUtilities.repeat(s,multiplier);
    if (n <= 100000000) {
         result = StringUtilities.count(megaString,symbol,n);
    } else {
         result = StringUtilities.speacialCount(StringUtilities.count(megaString,symbol,multiplier), 10000);
    }; 
    
    return result;
     
}

console.log(repeatedString(s,n));