// JavaScript Document
$(document).ready(function() {

            //localStorage.removeItem("users");

            var userStr = localStorage.getItem('users');

            if (userStr != null && userStr != undefined) {
                var jsonObj = JSON.parse(userStr);

                console.log("onload value", jsonObj);

                $.each(jsonObj.items, function(i, item) {
                    $('#inrhist').prepend('<div class="inrval">'+item.user +'--'+item.dateinr+'</div>');
                 });
            }

            $('#inrbtn').click(function () {

                var dataItems = { items: [] };

                var inrval = $('input[name=user]').val();
                var inrdate = $('input[name=dateinr]').val();

                var item = { user: inrval, dateinr: inrdate };

                var usersList = localStorage.getItem('users');

                var jsonObj;

                if (usersList == null) {
                    dataItems.items.push(item);                  
                    jsonObj = JSON.parse(JSON.stringify(dataItems));
                }
                else {
                    jsonObj = JSON.parse(usersList);
                    jsonObj.items.push(item);
                }

                jsonStr = JSON.stringify(jsonObj);

                console.log(jsonStr);

                localStorage.setItem("users", jsonStr);

                $('#inrhist').prepend('<div class="inrval">' + inrdate + '--' + inrval + '</div>');

            });

    $('#remlast').click(function() {
        var cont=confirm('Are you sure you want to delete the last entry?');
    		if(cont){   }


    		 else {    };
           
            	
            });        
		   
	$('#dosagebtn').click(function(){
	   
	   var dosage=$('input[name=slider-1]').val();
	   localStorage.setItem('ldosage',dosage);
	   var storeddosage=localStorage.getItem('ldosage');
	   alert('Dosage is ' + storeddosage + ' mg');
	   });
  	
});
