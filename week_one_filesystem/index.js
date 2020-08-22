const fs  = require('fs')


// Read file async (Recommended)
fs.readFile('./sample.txt',(err, data) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log(data.toString());
})

// read file sync
try {
    let content = fs.readFileSync('./sample.txt') // 2GB

    console.log(content.toString());
} catch(e) {
    console.log(e);
}
