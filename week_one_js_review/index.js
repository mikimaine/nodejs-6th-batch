// const chalk = require('chalk');

// console.log(chalk.blue("Hello World"))

// Object

// Array , Set, Map, Object

// Array = [] new Array, Array.from 

// Set, // unique new Set() 

// Object  key:value . ['']

// Map key:value extract built in function 

var a = {a : 123}
// console.log(a)
var c = new Map()

c.set('asd', 123)
// console.log(c)

var b = [123, 1, 'asd', {}, 123]
var cleanDuplicate = []
// for(let i = 0; i < b.length; i++) { //  1 (n-1)
    // if(!cleanDuplicate.includes(b[i])) { // n
//         cleanDuplicate.push(b[i]) // 
//     }
// } // O(n^n)

b.forEach(value => {  // ES5, ES6, Bable
    if(!cleanDuplicate.includes(value)) { // n
        cleanDuplicate.push(value) // 
    }
})

// takes array and return array? 
// .map  takes array return array
let percentages = [
     0.1, // 0
     0.5, // 1
     0.7 // 2
    ] // * 100

percentages = percentages.filter((value, index) => value >= 0.5)   // sync 
                         .map((value, index) =>value * 100)
                         .reduce((prev, nxt) => prev+nxt, 0)

                         // find  => return found element
                         // includes => return boolean
                         // indexOf => return the index || -1


                         // fill =>  initial value 
                         
                         // push 
                         // pop 
                         // splice
                         
                         // revers
                         // sort

                         // 

                         let newArray  = [1,2,3,5,6]
 // array return a single value
 newArray.splice(2, 1)
// console.log(newArray)
// console.log(newper)
var d = new Set(b) // eff

// console.log(Array.from(d))


// Promise
// 
function getData() {
     
    return new Promise((resolve, reject) => {
            return resolve(1)
    })
}
function getSingleData(id) {
    return new Promise((resolve, reject) => {
        return resolve(id)
})
}

async function  globalAsync() {
    try {
        let newdata = await getData(); // a min 
        newdata = await getSingleData(newdata);
    console.log(newdata);
    } catch(e) {
        console.error(e)
    }
}

// globalAsync().then(() => {
//  // 1 min

//  return;
// });

let result = 0 
// async/wait
// Promise.all()
// Observables

// a.sub(val => {

// })

// save db
// send http 
// test 
 let ff = [
     'url:img',
     'url:img',
     'url:img'
 ].map(val => getSingleData(val))

 [
    'url:img',
    'url:img',
    'url:img'
].forEach((val) => {
    getSingleData(val).then(() => {

    })
})
Promise.all([]).then(data => {
        // if(data[0]) {
        //     // logic
        // }
  console.log (data) 
})

// getData().then(data => {
//    result = data
//    getSingleData(result).then(d => {
//             result = d
//             console.log(result)
//    })
//    console.log(result)
// }, error => {

// })


