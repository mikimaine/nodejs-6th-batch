const { resolve } = require("path");
const { reject } = require("async");


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

function asyncIsEven(param) {
    // some operation
    return new Promise((resolve, reject) => {
        if(typeof param !== 'number') {
            return reject('Not a valid number')
        }
        
        return resolve(param % 2 === 0 )
    })
    
}




let a = 2;

// asyncIsEven(a, (error, result) => {
//     if(error) {
//         console.log(error);
//         return;
//     }

//     console.log(`value is even? : ${result}`);
// })

asyncIsEven(a).then((data) => {
    console.log(`value is even? : ${data}`);
}).catch(error => {
    console.log(error);
})

 
// const fs = require('fs')

// for(let i=0; i<5;i++) {
//     fs.readFile(`files/${i+1}.txt`,(err,data) => {
//         if(!err) {
//             console.log(i+1 + ' complete');
//         } else {
//             console.log(err);
//         }
//     })

//     // fs.readFileSync(`files/${i+1}.txt`)
//     // console.log(i+1 + ' complete');
// }

// console.log('Done!');



