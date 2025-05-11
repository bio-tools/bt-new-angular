//Components

jQuery(document).ready(function($) {

  //Input fields: Check if elements are filled out
  // add / removd filled class if the value is not empty, can also do this in angular

  $('.bio-form-item').each(function(n,v){
    var field = $(this).find('input');
    if(field.val() != ""){
      $(field).addClass('filled');
    } else {
      $(field).removeClass('filled');
    }
  });

  // run the bellow function if there are changes in the item 
  // https://api.jquery.com/change/
  // basically add/remove filled class based on value
  $(document).on('change',".bio-form-item input",function(){
    if ($(this).val() != "") {
      $(this).addClass('filled');
    } else {
      $(this).removeClass('filled');
    }
  });

});