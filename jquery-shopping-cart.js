var url = "https://api.myjson.com/bins/3uuw7?callback=?";
   
   $.ajax({
            url: url,
            type:"GET",
            data: "json",
      success: function(data) {
      	console.log(data);
      		for (item in data){
      			var $new_item = "<div class='item'><div class='title'>" + data[item].name + "</div>" +
      			"<div class='price'>" + data[item].price + "</div>" +
      			"<div class='category'>" + data[item].category + "</div></div>";	
 				$("#menu").append($new_item);
      		} 
      },
      error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
      }
   });

