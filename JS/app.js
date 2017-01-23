$(document).ready(function(){
	$("add-to-cart").on("click",function(){
		var currentVal =$("counter").val();
		var increment = parseInt(currentVal++) +1;
		$("counter").val(increment);
	});
});