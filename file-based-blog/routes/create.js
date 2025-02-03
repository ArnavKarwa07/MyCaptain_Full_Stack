const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post('/', (req, res) => {
  const { title, content } = req.body;
  fs.writeFile(`./posts/${title}.txt`, content, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

module.exports = router;
