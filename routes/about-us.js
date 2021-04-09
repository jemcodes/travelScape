const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('about-us')
})

module.exports = router;