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
    console.log(error);
}


// Create a new file

fs.writeFile('./files/new_file.txt', "content of file", (err) =>{
    if(err) {
        console.log(err);
        return;
    }

    console.log("File is created");
})
// Create your own  sync writeFileSync usage

// Create a new dir

fs.mkdir('./files/newDir', err => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Folder created");
})