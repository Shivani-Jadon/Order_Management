const express = require('express');
const router = express.Router();
const fs = require('fs');

let dummydata = fs.readFileSync('./data/dummy_data.json');
let order_data = JSON.parse(dummydata);
console.log(order_data);

console.log("loading routes");

// request handler
router.get('/', (req, res) => {
    res.render('home',{
        data : order_data
    });
});

module.exports = router;