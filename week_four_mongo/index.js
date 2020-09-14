const mongo = require('mongoose');


// connect
const protocol = 'mongodb'
const url = 'localhost'
const port = '27017'
const database = 'node_db'

mongo.connect( `${protocol}://${url}:${port}/${database}`, { useNewUrlParser: true, useUnifiedTopology: true})

mongo.connection.on('error', function errHandler() {
    console.error('MongoDB connection error.');
    process.exit(1);
  });

  
mongo.connection.on('connected', 
    function conListener(){
        console.log('successfully connected to mongodb');
    });

    
// Schema
const SampleSchema = new mongo.Schema({
    id: String,
    name: String
});
// on demand

const Sample = mongo.model('SampleSchema', SampleSchema); // export

// Create
// const newSample = new Sample({ name: 'new from schema', id: '123344' });

// newSample.save((err, sample)=> {
//     if(err) {
//         console.log(err, 'err....');
//     } else {
//         console.log(sample, 'sample ...');
//     }
    
// })


// Find/SELECT
Sample.find((err, results) => {
    if(err) {
        console.log(err, 'err....');
    } else {
        console.log(results, 'results ...');
    }
})

// Find/SELECT with WHERE
Sample.find({_id: '5f56613c3e3209f6af3d4b36'}, (err, results) => {
    if(err) {
        console.log(err, 'err with WHERE....');
    } else {
        console.log(results, 'results with WHERE ...');
    }
})

// Find/SELECT with WHERE SINGLE
Sample.findOne({_id: '5f56613c3e3209f6af3d4b36'}, (err, results) => {
    if(err) {
        console.log(err, 'err with WHERE Single....');
    } else {
        console.log(results, 'results with WHERE Single...');
    }
})


// UPDATE

Sample.update({_id: '5f56613c3e3209f6af3d4b36'}, {name: 'updated name'},(err, results) => {
    if(err) {
        console.log(err, 'err from update....');
    } else {
        console.log(results, 'results from update..');
    } 
})

// Removed data
// Sample.remove({_id: '5f56613c3e3209f6af3d4b36'}, (err, results) => {
//     if(err) {
//         console.log(err, 'err with WHERE....');
//     } else {
//         console.log(results, 'results Removed');
//     }
// })


// disconnect