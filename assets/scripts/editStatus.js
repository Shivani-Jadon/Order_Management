{
    console.log("In edit/view script");
    
    function rejectOrder(order_id){
        console.log(order_id);
        // console.log(dummyData);
        for(let iterator of dummyData){
            // console.log(iterator);
            if(iterator.OrderNo == order_id){
                console.log("found", iterator);
                iterator.OrderStatus = 'Reject';
                console.log("edited", iterator);

                // $.getJSON('./data/dummy_data.json', function(data) {
                //     // console.log(data);

                // }).fail(function(){
                //     console.log("An error has occured");
                // });

                $('#status').html('Order Status :- Reject');
            }
        }
    }

    function confirmOrder(order_id){
        console.log(order_id);
        for(let iterator of dummyData){
            // console.log(iterator);
            if(iterator.OrderNo == order_id){
                console.log("found", iterator);
                iterator.OrderStatus = 'Confirm';
                console.log("edited", iterator);
                $('#status').html('Order Status :- Confirm');
            }
        }
    }
}