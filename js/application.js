$(document).ready(function() {

// 	// $('#calc-prices-button').click(function() { 
// 	// 	var total = 0
// 	// 	for (var i = 0; i < $('.item-price').length; i++) {
// 	// 		total += Number($('.item-price')[i].text().replace("$","")) * Number($('input.quantity')[i].val());
// 	// 	} return total;
// 	// });
  
//   // $('.cancel').click(function() {
// 		// return $('.quantity').val(0);
// 		// $(this)
// 		// });

//   // 	$(document).on('click', '.cancel', function(){
//   // 	$(this) 
// 		// });


//   //   $('#calc-prices-button').click(function() {
// 		// 	cart();
// 		// });
  
// 		// function cart() {

//   //       var prices = $('.item-price');
//   //       var units = $('input.quantity');
//   //       var total = 0;

//   //       for (var i = 0; i < prices.length; i++) {
//   //       var unit = units[i];
//   //       var price = prices[i];
//   //       total += (Number($(unit).val()) * Number($(price).text().replace("$","")));
//   //     }
//   //       $('#total-price').text(total);
//   //   }


// // convert item-price from object to string
// 	// $('.item-price').text()

// // remove dollar sign from string
// //	.replace("$","")
// // $('.item-price').text().replace("\$","")

// // change string to a number
// // Number($('.item-price').text().replace("$",""))
	

// extract $('.item-price')
// Number($($('.item-price')[0]).text().replace("\$",""));

// extract $('.quantity')
// Number($($('.quantity')[0]).val());

// subtotal of quantity and price


	function sum() {
  	var price = $('.item-price');
  	var quantity = $('.quantity');
  	var total = 0;

  	for (var i = 0; i < price.length; i++) {
      var subtotal = Number($(price[i]).text().replace("\$","")) * Number($(quantity[i]).val());
      total += subtotal;
      $($('.subtotal-price')[i]).text("$" + subtotal + ".00"); 
    }
    $('#total-price').text("$" + total + ".00"); 
  }

  $(document).on('click','#calc-prices-button',function(){
    sum();
  });

  $('.cancel').click(function() {
    $(this).parents('.row').remove();
  });

    $(document).on('click','create', function() {
      var create = $('#new-item-name').val()
        $('.row').prepend($('div'), ['new-item-name', 'new-item-price']);
    });

});

// test prepend
//

// prepend a row
// $( "body" ).prepend( $newdiv1, [ newdiv2, existingdiv1 ] );

// add input forms in html and create a button

// dynamically add form to row using prepend (use info on how you extracted value for qty)













