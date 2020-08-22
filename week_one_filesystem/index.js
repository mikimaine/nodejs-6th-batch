const fs  = require('fs')


// Read file async (Recommended)
function readFile (path) {
    fs.readFile(path,(err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(data.toString());
    })
}


// read file sync
try {
    let content = fs.readFileSync('./sample.txt') // 2GB

    console.log(content.toString());
} catch(e) {
    console.log(e);
}


// read dir contents

fs.readdir('./files', (err, files) => {
    if(err) {

        console.log(err);
        return;
    }

    console.log(files);

    files.forEach(value => {
        readFile(`./files/${value}`)
    })
    // console.log(files);
})

// sync read dir
try {
   let files = fs.readdirSync('./files');
   console.log(files);
} catch (error) {
    
}
