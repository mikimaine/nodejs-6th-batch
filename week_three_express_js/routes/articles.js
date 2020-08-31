var express = require('express');
var router = express.Router();

var articles = [
  {
    id: 1,
    title: 'sample article',
    description: 'sample description'
  }
]
// returning all articles
router.get('/', function(req, res, next) {
  res.json(articles)
});

// getting a single article
router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  
  const article = articles.find(article => article.id == id);
  if(!id || !article) {
    res.status(404).json({
      error: true,
      message: 'Not Found'
    })
  }
  res.json(article)
});

router.post('/', (req, res) => {
  let data = req.body

  if(!data) {
    return res.status(400).json({
      error: true,
      message: 'No body Data'
    })
  }

  data = {...data, id: articles.length+1 }
  articles.push(data);
  res.json(data)
})

router.patch('/:id', (req, res) => {
  let id = req.params.id
  let data = req.body
  let articleIndex = articles.findIndex(article => article.id == id); 

  console.log(id,data, articleIndex, articles);
  if(!id || !data || articleIndex === -1) {
    return res.status(400).json({
      error: true,
      message: 'No body Data'
    })
  }

  articles[articleIndex] = {...articles[articleIndex], ...data}
  res.json(articles[articleIndex])
})


router.delete('/:id', (req, res) => {
  let id = req.params.id
  if(!id){ 
    return res.status(400).json({
      error: true,
      message: 'No Data'
    })
  }

  articles = articles.filter(article => article.id != id);

  res.json({
    message: 'Deleted!'
  })

})

module.exports = router;
