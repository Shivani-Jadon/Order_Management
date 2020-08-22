const express = require('express');
const router = express.Router();
const fs = require('fs');

let dummydata = fs.readFileSync('./data/dummy_data.json');
let order_data = JSON.parse(dummydata);
order_data.sort( (a,b) => {
    let parts = a.OrderDate.split('/');
    const d1 = Number(parts[2] + parts[1] + parts[0]);
    parts = b.OrderDate.split('/');
    const d2 = Number(parts[2] + parts[1] + parts[0]);
    return d2 - d1;
});


console.log("loading routes");

// request handler
router.get('/', (req, res) => {
    console.log(order_data);

    res.render('home',{
        data : order_data
    });
});

module.exports = router;