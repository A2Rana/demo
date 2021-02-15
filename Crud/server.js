const http = require('http');
const fs = require('fs');

// http.createServer(function (req, res) {
//     res.writeHead(200, {
//         'Content-Type': 'text/plain'
//     });
//     res.end('Setup Inida');
// }).listen(4000, () => {
//     console.log('Listening on port 4000');
// });

let myReadStream = fs.createReadStream(__dirname + '/random.txt', 'utf8');
let myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

/*
myReadStream.on('data', function (chunk) {
    console.log('new chunk received');
    myWriteStream.write('aakash\n');
});
*/

myReadStream.pipe(  )