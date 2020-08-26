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

    // console.log("data : ",req.query.id);
   
    for(let itr of order_data){
        if(itr.OrderNo == order_id){
            view_order_data = itr;
        }
    } 
    res.render('editOrder',{
        data : order_data,
        view_order : view_order_data
    })
});

// route for editing status "Reject"
router.post('/edit_data/reject', (req, res) => {

    let order_id = req.query.order_id;
    console.log("order id : ",order_id);

    for(let iterator of order_data){
        // console.log(iterator);
        if(iterator.OrderNo == order_id){
            console.log("found", iterator);
            iterator.OrderStatus = 'Reject';
            console.log("edited", iterator);
        }
    }

    res.redirect("back");
})

// route for editing status "Confirm"
router.post('/edit_data/confirm', (req, res) => {

    let order_id = req.query.order_id;
    console.log("order id : ",order_id);

    for(let iterator of order_data){
        // console.log(iterator);
        if(iterator.OrderNo == order_id){
            console.log("found", iterator);
            iterator.OrderStatus = 'Confirm';
            console.log("edited", iterator);
        }
    }

    res.redirect("back");
})


module.exports = router;