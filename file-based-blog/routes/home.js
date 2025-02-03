const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/', (req, res) => {
  fs.readdir('./posts', (err, files) => {
    if (err) throw err;
    res.render('home', { posts: files });
  });
});

module.exports = router;
