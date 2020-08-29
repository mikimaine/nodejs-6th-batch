const http = require('http')

const fs = require('fs')
var finalhandler = require('finalhandler')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('assets', { 'index': ['index.html', 'index.htm'] })

const server = http.createServer((req, res) =>  {

    // with server static
    // serve(req, res, finalhandler(req, res))
    // console.log(req , 'req.url');
    

      // Middleware
      // Route

       // hello => World

       console.log(req.url, 'req.rul');
       const url = req.url.split('/') // RegExp

       console.log(url, 'req.rul');

       if('hello' === url[1] && url.length > 2) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
          })
          return res.end(JSON.stringify({
               "message": `hello ${url[2]}`
           }))
       }

       res.writeHead(404, {
        'Content-Type': 'application/json'
      })

       res.end(JSON.stringify({
        error: 'Not Found'
        }))




    //   switch (req.method) {
    //       case 'GET':
    //         res.end(JSON.stringify({
    //             url: req.url,
    //             method: req.method,
    //             host: req.host,
    //             protocol: req.protocol,
    //             data: req.data,
    //             params: req.params,
    //         }));
    //         break;
    //      case 'POST': 
    //         res.end(JSON.stringify({
    //             url: req.url,
    //             method: req.method,
    //             data: "POST data"}));
    //     break;
    //     default:
    //         res.end("Method not supported yes");
    //   }

    // res.end(JSON.stringify({
    //     url: req.url,
    //     method: req.method,
    //     host: req.host,
    //     protocol: req.protocol
    // }));

    // with core module
    // fs.readFile(__dirname + req.url, function (err,data) {
    //     if (err) {
    //       res.writeHead(404);
    //       res.end(JSON.stringify(err));
    //       return;
    //     }
    //     res.writeHead(200);
    //     res.end(data);
    //   });

})

server.listen(8080)

console.log('Server created on port 8080')

