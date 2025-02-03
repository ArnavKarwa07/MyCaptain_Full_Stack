const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post('/:title', (req, res) => {
  const oldTitle = req.params.title;
  const { title, content } = req.body;

  fs.unlink(`./posts/${oldTitle}.txt`, (err) => {
    if (err) throw err;
    fs.writeFile(`./posts/${title}.txt`, content, (err) => {
      if (err) throw err;
      res.redirect('/');
    });
  });
});

module.exports = router;
