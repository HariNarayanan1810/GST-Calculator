// $("button").click(function(){

// 	//var itemCost = Number($("input[name='item']").val());
// 	var gstCost = Number($("input[name='gst']").val());

// 	var gstAmount = itemCost * (gstCost / 100) ;
// 	var totalCost = itemCost + gstAmount ;
	
// 	$("#result").text("Total Amount is : "+ totalCost.toFixed(2));

// });

var itemCount = 1;
$("#addItem").click(function(){
	itemCount++;
	$("#items").append(
		'<p class="Item">Item ' + itemCount +  ' cost: <input type="number" name="item"> </p>');
});

$('#calculate').click(function(){
	var totalItemCost = 0;
	$("input[name='item']").each(function(){
		totalItemCost += Number($(this).val());
	});

	var gst = Number($("input[name='gst']").val());

	var gstAmount = totalItemCost *(gst/100);

	var totalCost = totalItemCost + gstAmount;

	$("#result").text(
		"Subtotal: "+totalItemCost.toFixed(2) + 
		" GST: "+gstAmount.toFixed(2) +
		" Total: "+totalItemCost.toFixed(2)
		);
	

});

