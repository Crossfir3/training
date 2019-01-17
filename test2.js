var s = 'aba';
var target = 1000000000000;
var n = 0;
var news = '';
while( n < target){
    news += s;
    n++;
}
console.log( (news.match(/a/g)||[]).length);