var s = "DDUUDDUDUUUD";
var seaLevel = 0;
var count = 0;
var terrain = [0];

function countingValleys(n, s) {
    [...s].forEach(function(a){
        if (a == "U") {
            seaLevel++;
        } else if (a == "D") {
            seaLevel--;
        }
        
        terrain.push(seaLevel);
    });
    terrain.forEach(function(b,index){
        if (b == 0 && terrain[index+1] < 0 ) {
            count++
        }
    })
    return count;
};

console.log(countingValleys(8,s));