{
    
    let today = new Date();
    let mm = today.getMonth()+1;
    let d = today.getDate();
    let curr_date = [today.getFullYear(),mm<10?'0'+mm:mm,d<10?'0'+d:d].join('-');
    
    $('#start-date').attr('max',curr_date);
    $('#end-date').attr('max',curr_date);
   
    function filterDate(){
        let startDate = $('#start-date').val();
        let endDate = $('#end-date').val();

        if(startDate > endDate){
            alert("Start Date must be less than End Date!!!!");
        }else{
            
            // console.log(dummyData);

            $('#detailed-data').empty();

            for(let index=dummyData.length-1; index>=0; index--){
               
                // getting start date in dd/mm/yyyy format
                let formatted_date = dummyData[index].OrderDate.split('/').reverse().join('-');;
                
                if(formatted_date >= startDate && formatted_date<= endDate){
                        console.log(formatted_date);
                        let table_index = $("<th></th>").text(`${index}`);
                        let table_data1 = $("<td></td>").text(`${dummyData[index].UserName}`);
                        let table_data2 = $("<td></td>").text(`${dummyData[index].OrderNo}`);
                        let table_data3 = $("<td></td>").text(`${dummyData[index].OrderDate}`);
                        let table_data4 = $("<td></td>").text(`${dummyData[index].OrderStatus}`);
                        let table_data5 = $("<td></td>").text(`${dummyData[index].TotalAmount}`);
                        let table_data6 = $("<td></td>").text(`${dummyData[index].TotalQty}`);
                        
                        let anchor = $("<a></a>").attr('href',`/edit_data?id=${dummyData[index].OrderNo}`).text("View/Edit");
                        let table_data7 = $("<td></td>").append(anchor);

                        let new_row = $("<tr></tr>").append(table_index, table_data1, table_data2, table_data3, table_data4, table_data5, table_data6, table_data7);
                        $('#detailed-data').prepend(new_row);
                }
            }

        }

    }

}