{
    function rejectOrder(order_id){
        console.log(order_id);
        console.log(dummyData);
        for(let iterator of dummyData){
            console.log(iterator);
            if(iterator.OrderNo == order_id){
                console.log("found", iterator);
            }
        }
    }

    function confirmOrder(order_id){
        console.log(order_id);
        for(let iterator of dummyData){
            if(iterator.OrderNo == order_id){
                console.log("found", iterator);
            }
        }
    }
}