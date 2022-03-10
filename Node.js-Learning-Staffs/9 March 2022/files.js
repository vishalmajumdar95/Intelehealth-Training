//Buffer class 
// var utf8String = 'my string'
// var buf = Buffer.from(utf8String);
// var buf = Buffer.alloc(80);
// var base64String = buf.toString('base64');
// console.log(base64String);
// console.log(buf);


// // // Path Demo
var path = require('path');
console.log(path.normalize('/foo/bar//baz/asdf/quux/../.'));
console.log(path.join('abd','/bcd/ghgh/..'));

console.log(path.dirname('/foo/bar/baz/asdf/quux.txt'));
console.log(path.basename('/foo/bar/baz/asdf/quux.html'));
console.log(path.dirname('/a/b/index.html'));