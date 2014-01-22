// JavaScript Document
$(document).ready(function() {
   $('#inrbtn').click(function(){
	   
	   var inrval=$('input[name=user]').val();
	   var inrdate=$('input[name=dateinr]').val();
	   $('#inrhist').prepend('<div class="inrval">'+inrdate+ '  ----  ' +inrval+ '</div>');
	   });
	   
	$('#dosagebtn').click(function(){
	   
	   var dosage=$('input[name=slider-1]').val();
	   alert('Dosage is ' + dosage + ' mg');
	   });
  
});