  var itemCost = Number($("input[name='item']").val());
  
	var gst = Number($("input[name='gst']").val());

	var gstAmount = itemCost *(gst/100);

	var totalCost = itemCost + gstAmount;

	$("#result").text(
		" Total: "+totalItemCost.toFixed(2)
		);
	

});

