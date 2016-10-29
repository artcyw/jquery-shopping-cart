$(document).ready(function(){

  var items =
      [{
        "id":1,
        "name":"egg rolls",
        "price": 5.99,
        "description": "desc"
      },
      {
        "id":2,
        "name":"fired rice",
        "price": 8.99,
        "description": "desc"
      },
      {
        "id":3,
        "name":"chicken fired rice",
        "price": 11.99,
        "description": "desc"
      },
      {
        "id":4,
        "name":"fin soup",
        "price": 18.95,
        "description": "desc"
      }
      ];


  var showData = function(items){
    var itemEL = "";

    var row_item = '<a href="#"> <div class="row item"><div class="col-md-6"><div>';
    var end_row_item = '</div><div>';
    var price_item = '</div></div><div class="col-md-6 text-r">'
    for(let item of items){
      itemEL += row_item + item["id"] + "." + item["name"] + " " + end_row_item + " " + item["description"] + " " + price_item + "$" + item["price"] + " </div></div></a>";
    }
    $("#item-wrapper").html(itemEL);
    console.log(itemEL);
  };
  showData(items);

});
