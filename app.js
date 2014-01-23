// JavaScript Document
$(document).ready(function() {
   if(localStorage['linrval'],localStorage['linrdate']){
	   $('#inrhist').prepend('<div class="inrval">'+localStorage['linrdate']+ '  ----  ' +localStorage['linrval']+ '</div>');
	   };
   
   $('#inrbtn').click(function(){
	   var inrval=$('input[name=user]').val();
	   var inrdate=$('input[name=dateinr]').val();
	   localStorage.setItem('linrval',inrval);
	   localStorage.setItem('linrdate',inrdate);
	   $('#inrhist').prepend('<div class="inrval">'+inrdate+ '  ----  ' +inrval+ '</div>');
	   });

		
		   
	$('#dosagebtn').click(function(){
	   
	   var dosage=$('input[name=slider-1]').val();
	   localStorage.setItem('ldosage',dosage);
	   var storeddosage=localStorage.getItem('ldosage');
	   alert('Dosage is ' + storeddosage + ' mg');
	   });
  	
});