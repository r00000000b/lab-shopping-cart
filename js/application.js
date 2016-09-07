// $(document).ready(function() {


/*
$("#god").on("click", function() {
make if / else for values in box
}
*/

function dustUp() {
  var tempFood = $('#foodItem').val();
  var tempPrice = $('#foodItemPrice').val();
  var godsContent = $('#godContent');
  var subT = '$0.00'

  $('#godContent').append('<div id="godRow" class="row"></div>');
  $('#godRow').append('<div id="foodDiv" class="food col-xs-3">'+tempFood+'</div>');
  $('#godRow').append('<div id="foodPriceDiv" class="foodPrice col-xs-3">'+tempPrice+'</div>');
  $('#godRow').append('<div id="qntDiv" class="qtyInput col-xs-3">QTY <input type="text" value="" placeholder="Enter New Value"></div>');
  $('#godRow').append('<div id="subDiv" class="subT col-xs-2">'+subT+'</div>');
  $('#godRow').append('<div id="removal" class="col-xs-1"><a href="#">remove</a></div>');
  $('#godRow').append('<div class="row"><div class="col-xs-12"></div><div class="col-xs-12"></div></div>');


};
/*
  var tempFood = $('#foodItem').val(); // value of current box
  var foodDiv = document.getElementById("foodDiv");
  foodDiv.innerHTML = tempFood;
  var godRow = document.createElement('div');
  godRow.setAttribute('class', 'row');

$('#foodItem').on('input', function() {
  var input = $(this);
  var tempFood = input.val();
  if (tempFood) {
    input.removeClass("invalid").addClass("valid");
  } else {
    input.removeClass("valid").addClass("invalid");
  }
});
*/

// });
