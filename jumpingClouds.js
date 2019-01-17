var c = [0, 0, 0, 0, 1, 0];
var count = 0;
var index = 0;

function jumpingOnClouds(c) {
    var a = [...c];
    for (; index <= a.length - 1; ) {
        if (a[index+ 2] == 0) {
            index = index + 2;
            count++; 
        } else if (a[index + 1] == 0) {
            index = index + 1;
            count++; 
        }
        if (index == a.length - 1) {
            break;
        }    
    }

    return count;
}

console.log(jumpingOnClouds(c));