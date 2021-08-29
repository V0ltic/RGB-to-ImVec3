/*
* Logger
*/
function log (msg) {
    console.log(msg);
}

var r = process.argv[2];
var g = process.argv[3];
var b = process.argv[4];

if (process.argv.length >= 5) {
    r = r / 255;
    g = g / 255;
    b = b / 255;

    log(`Converted: (${r.toFixed(2)}f, ${g.toFixed(2)}f, ${b.toFixed(2)}f)`)
}
else {
    log(`Invalid parameters!`);
}