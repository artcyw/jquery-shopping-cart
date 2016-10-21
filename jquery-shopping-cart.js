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

 var cartItems = {};   
 var total = 0;

  function listMenu(){
    $('#menu h1').after(function(){
      var list = "";
      items.forEach(function(item){
        list+= "<li><a class='item' data-item-id='"+item.id+"''><div>Name: "+item.name+"</div><div>Price: "+item.price+"</div><div>desc: "+item.description+"</div></a></li>"
      });
      return list;
    });
  }   

  function removeFromCart(){
    alert("allen");
    var itemID = $(this).data('item-id');
    console.log(itemID);
    $(this).remove();
    if(cartItems[itemID]-- <= 0){
      delete cartItems[itemID] 
    }else {
      cartItems[itemID]--;
    }
     $('#cart #total').text(totalCalc());   
    
  }  

  function addToCart(){
    var itemID = $(this).data('item-id');
    console.log(itemID);
      
    var cartItem = "<li data-item-id='"+itemID+"'><div>Name: "+items[itemID-1].name+"</div><div>Price: "+items[itemID-1].price+"</div><a onclick='removeFromCart()' class='remove'><div>remove</div></a></li>";
    
    //};
    if(cartItems[itemID]){
      cartItems[itemID]++;
    //$('#cart #total').text(totalCalc());      
    }else{
      cartItems[itemID] = 1;
    $('#cart h1').after(cartItem);
    }
    $('#cart #total').text(totalCalc());
    console.log(cartItems);

  }

  function totalCalc(){
    for(var cartItem in cartItems ){
      total +=  items[cartItem-1].price * cartItems[cartItem];
    }
    return total;
  }

  listMenu();

  $('.item').on('click',addToCart);
  // $('.remove').on('click',removeFromCart);

});   
