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

// request handler for home page
router.get('/', (req, res) => {
    // console.log(order_data);

    res.render('home',{
        data : order_data
    });
});

// request handler to edit/view order
router.get('/edit_data', (req, res) => {
    let order_id = req.query.id;
    let view_order_data;
    console.log(order_id);
    for(let itr of order_data){
        if(itr.OrderNo == order_id){
            view_order_data = itr;
            console.log(view_order_data);
        }
    } 
    res.render('editOrder',{
        view_order : view_order_data
    })
});


module.exports = router;