   $.ajax({
      url: 'http://cmtepxress.com/projects/jsc/items.json',
      data: 'json',
      success: function(data) {
      	console.log(data);
      		for (item in data){
      			var $new_item = "<div class='item'><div class='title'>" + data[item].name + "</div>" +
      			"<div class='price'>" + data[item].price + "</div>" +
      			"<div class='category'>" + data[item].category + "</div></div>";	
 				$("#menu").append($new_item);
      		} 
      },
      type: 'GET'
   });
