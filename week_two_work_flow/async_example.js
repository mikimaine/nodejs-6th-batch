
const async =  require('async');



async.parallel({
    users: function(callback) { 
        setTimeout(function() {
            console.log(1);
            callback(null, 1) // 4
        },200)
        
     },
    messages: function(callback) { 
        
        setTimeout(function() {
            console.log(2);
            callback(null, 2) // 4
        },100)
     }
    }, function(err, results) {
    console.log(results, 'result ');
});
console.log(' >>>>>>>>');



// async/await
async.series({
    one: function(callback) {
        setTimeout(function() {
            console.log(1);
            callback(null, 1);
        }, 200);
    },
    two: function(callback){
        setTimeout(function() {
            console.log(2);
            callback(null, 2);
        }, 100);
    }
}, function(err, results) {
    console.log(results);
    // results is now equal to: {one: 1, two: 2}
});


function name() {


    return new Promise(resolve,reject)
}