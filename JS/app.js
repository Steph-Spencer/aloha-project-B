$(document).ready(function(){

	$(".add-to-cart").on("click",function(){
		console.log("hi");
		var currentVal =$("#counter").val();
		var increment = parseInt(currentVal++) +1;
		$("#counter").val(increment);
	});
});

