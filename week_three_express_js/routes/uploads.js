var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  
  if(!req.files) {
    res.status(400).json({
      error: true,
      message: 'No data'
    })
  } else {
    let files = req.files.file
    if(Array.isArray(files) ) {
      let uploadedFiles = []
      files.forEach(file => {
        // all uploading
        if( ['image/png','image/jpeg' ].includes(file.mimetype)) {
          file.mv(`uploads/${file.name}`)
          uploadedFiles.push({
            name: file.name,
            size: file.size,
            mimetype: file.mimetype
          })
        }
        
      })
      res.status(201).json(uploadedFiles)
    } else {
      if( ['image/png','image/jpeg' ].includes(files.mimetype)) {
        files.mv(`uploads/${files.name}`).then(() => {
          // res.download(`uploads/${files.name}`)
          res.status(201).json(
            {
                name: files.name,
                size: files.size,
                mimetype: files.mimetype
              }
          )
        })
      } else {
        res.status(400).json({
          error: true,
          message: 'No valid file'
        })
      }
      
    }
    // let files = []

    // req.files.forEach(file => {

    // 
    // files.push({
    //   name: file.name,
    //   size: file.size,
    //   mimetype: file.mimetype
    // })
    // });

    
    

    
  }

  
});

router.get('/:name', function(req, res, next) {
  res.download(`uploads/${req.params.name}`)  
});
module.exports = router;
