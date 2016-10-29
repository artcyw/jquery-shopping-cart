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


var cart = {
  totalPrice: 0,
  totalQty: 0,
  items: [],
  addToCart: function(){},
  removeFromCart: function(){},
  getTotal: function(){}
};



 // var cartItems = {};   
 // var total = 0;

  function listMenu(){
    $('#menu h1').after(function(){
      var list = "";
      items.forEach(function(item){
        list+= "<li><a class='item' data-item-id='"+item.id+"''><div>Name: "+item.name+"</div><div>Price: "+item.price+"</div><div>desc: "+item.description+"</div></a></li>"
      });
      return list;
    });
  }   

  listMenu();
  
 //  function removeFromCart(){
 
 //  //   var itemID = itemID;
 //    //$('.remove').on('click',function(){
 //      var itemID = $(this).data('item-id');
 //  //     //console.log($(this).parent());
 //      console.log("iid "+itemID);
 //      console.log("ci "+cartItems);
 //      console.log("ci[id] "+cartItems[itemID]);
 //      if(cartItems[itemID]-1 <= 0){
 //        $(this).parent().remove();
 //        delete cartItems[itemID]; 
 //      }else {
 //        cartItems[itemID]--;
 //      }
 //       $('#cart #total').text(totalCalc());   
 //   // });
 //  }  

 //  function addToCart(itemID){
 //    //var itemID = arg.data('item-id');
 //    console.log(itemID);
      
 //    var cartItem = "<li id='item-"+itemID+"'><div>Name: "+items[itemID-1].name+"</div><div>Price: "+items[itemID-1].price+"</div><a class='remove' data-item-id='"+itemID+"'><div>remove</div></a></li>";
    
 //    //};
 //    if(cartItems[itemID]){
 //      cartItems[itemID]++;
 //    //$('#cart #total').text(totalCalc());      
 //    }else{
 //      cartItems[itemID] = 1;
 //    $('#cart h1').after(cartItem);
 //    }
 //    $('#cart #total').text(totalCalc());
 //    console.log(cartItems);
 //    //removeFromCart();
 //  }

 //  function totalCalc(){
 //    var temp =0;
 //    for(var cartItem in cartItems ){
 //      temp +=  items[cartItem-1].price * cartItems[cartItem];
 //    }
 //    total = temp;
 //    return total;
 //  }


 //  $('.item').on('click',function(){
 //    var itemID = $(this).data('item-id');
 //    addToCart(itemID);
 //  });

 //      $(document).on('click','.remove',removeFromCart);

  // $('.item').on('click',function(){


  // });



});   
