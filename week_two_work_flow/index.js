

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

asyncIsEven(a, (error, result) => {
    if(error) {
        console.log(error);
        return;
    }

    console.log(`value is even? : ${result}`);
})
