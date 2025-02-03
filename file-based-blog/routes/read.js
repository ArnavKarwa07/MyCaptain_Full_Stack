const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/:title', (req, res) => {
  const title = req.params.title;
  fs.readFile(`./posts/${title}.txt`, 'utf8', (err, content) => {
    if (err) throw err;
    res.render('post', { title, content });
  });
});

module.exports = router;
