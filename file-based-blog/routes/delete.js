const express = require('express');
const fs = require('fs');
const router = express.Router();

router.post('/:title', (req, res) => {
  const title = req.params.title;
  fs.unlink(`./posts/${title}.txt`, (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

module.exports = router;
