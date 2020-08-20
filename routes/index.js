const express = require('express');
const router = express.Router();

console.log("loading routes");

// request handler
router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;