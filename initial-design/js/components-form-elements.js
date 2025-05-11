//Components

jQuery(document).ready(function($) {

	//Input fields: Check if elements are filled out
  $('.bio-form-item').each(function(n,v){
    var field = $(this).find('input');
    if(field.val() != ""){
      $(field).addClass('filled');
    } else {
      $(field).removeClass('filled');
    }
  });
  $(document).on('change',".bio-form-item input",function(){
    if ($(this).val() != "") {
      $(this).addClass('filled');
    } else {
      $(this).removeClass('filled');
    }
  });

});