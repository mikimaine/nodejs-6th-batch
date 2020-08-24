

function asyncCheckIfTypeIsNumber(param, cb) {
cb(null, typeof param !== 'number')
}

function asyncIsEven(param, callback) {
    // some operation

    if(typeof param !== 'number') {
        return callback('Not a valid number')
    }
    return callback(null, param % 2 === 0 )
}



let a = 1;

// asyncIsEven(a, (error, result) => {
//     if(error) {
//         console.log(error);
//         return;
//     }

//     console.log(`value is even? : ${result}`);
// })

 
const fs = require('fs')

for(let i=0; i<5;i++) {
    fs.readFile(`files/${i+1}.txt`,(err,data) => {
        if(!err) {
            console.log(i+1 + ' complete');
        } else {
            console.log(err);
        }
    })

    // fs.readFileSync(`files/${i+1}.txt`)
    // console.log(i+1 + ' complete');
}

console.log('Done!');



