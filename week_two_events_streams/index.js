const { EventEmitter } = require('events')

const eventEmitter = require('events').EventEmitter
const utils = require('util')

let emitter = new eventEmitter()


function Worker() {
    return {
        some_task: () => {
            emitter.emit('task_done', 'done...')
        },

    }
    //  EventEmitter.call(this)
}
// 

utils.inherits(EventEmitter, Worker)

function DatabaseWorker() {
    return {
        save: () => {
            emitter.emit('db_save', 'save data completed ...')
        },
        delete: () => {
            emitter.emit('db_save', 'save data completed ...')
        },
        update: () => {
            emitter.emit('db_save', 'save data completed ...')
        },
        before: () => {
            emitter.emit('db_save', 'save data completed ...')
        },

    }
    //  EventEmitter.call(this)
}//


// Worker.prototype.some_task =  
// namespace 


const worker = new Worker()

const databaseWorker = new DatabaseWorker()
// const databaseWorker1 = new DatabaseWorker()
// const databaseWorker2 = new DatabaseWorker()

databaseWorker.save()

emitter.on('task_done', (data) => {
    console.log(data);
})

[1,2].map().r()

worker.some_task()








// let users = {
//     1: 'user 1',
//     2: 'user 2',
//     3: 'user 3'
// }
// Object.keys(users).forEach(() => {
    
// })
// User 1
// emitter.on('nodejs', (data) => {
//     // lis
//     if(data.user !== 1) {
//         console.log('user 1: ' + data.user + ' says ' + data.message);
//         if(data.message == 'bey') {
//             emitter.emit('nodejs', {user: 1, message: 'bye2'})
//         }
        
//     }
// })

// User 2
// emitter.on('nodejs', (data) => {
//     // lis
//     if(data.user !== 2) {
//         console.log('user 2: ' + data.user + ' says ' + data.message);
//         if(data.message == 'hi') {
//             emitter.emit('nodejs', {user: 2, message: 'hey'})
//         }
//     }
// })

// User 3
// emitter.on('nodejs', (data) => {
//     // lis
//     if(data.user !== 3) {
//         console.log('user 3: ' + data.user + ' says ' + data.message);
//         if(data.message == 'hey') {
//             emitter.emit('nodejs', {user: 3, message: 'bye'})
//         }
//     }
// })

// setInterval(() => {
    
// }, 500)

// user 1
// emitter.emit('nodejs', {user: 1, message: 'hi'})




// send()
// Sms()
// cache()
// asdasd
// asdasd


