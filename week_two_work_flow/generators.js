

// HTTP 
// Retry
function* gen(limit) {
    let index = 0
    while(index++ < limit) {
		yield index; // new Promise()
    }
    /// more code

    return 1
}
function a() {
    return 0;

    return 1
}

function* asyncIsEven(param) {
    // some operation

    if(typeof param !== 'number') {
        return yield null
    }

    yield param % 2 === 0

    return typeof param
}

// async/wait

const isEven = asyncIsEven(2)
var result = isEven.next()
if(result.value === null) {
    console.log('there is an error');
} else{
    console.log(result.value); 
    console.log(isEven.next()); 
}


// console.log(varGen)

// console.log(varGen.next() )
// console.log(varGen.next() )
// console.log(varGen.next() )
// console.log(varGen.next() )
// console.log(varGen.next() )

// console.log(varGen.next())
// console.log(varGen.next())