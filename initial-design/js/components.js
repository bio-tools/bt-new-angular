//Components

jQuery(document).ready(function($) {

	//Search / browse toggles
	$( ".bio-search-browse > .search-toggle" ).click(function() {
	  $('.bio-search-browse > .browse-toggle').removeClass('active');
	  $('.bio-search-browse > .search-toggle').addClass('active');
	  $('.bio-search-container input.form-search').focus();
	  //$('.bio-top-section > .bio-search-container').removeClass('hide');
	});
	$( ".bio-search-browse > .browse-toggle" ).click(function() {
	  $('.bio-search-browse > .search-toggle').removeClass('active');
	  $('.bio-search-browse > .browse-toggle').addClass('active');
	  //$('.bio-top-section > .bio-search-container').addClass('hide');
	});

	//Assign fixed width to breadcrumbs if mobile (to allow for horizontal scroll)
	if ($(window).width() <= 835) {
		var totalWidth = 0;
		$('section.bio-top-section .bio-breadcrumbs-container a, section.bio-top-section .bio-breadcrumbs-container span').each(function(n,v){
			totalWidth += $(this).outerWidth(); 
	  });
	  $('section.bio-top-section .bio-breadcrumbs-container > .inner > .breadcrumbs').css('width', totalWidth + 5);
	}

	//Active classes for sort options
	$( ".bio-top-section .bio-top-options .bio-sort .sort-options a" ).click(function() {
		$('.bio-top-section .bio-top-options .bio-sort .sort-options a').removeClass('active');
		$(this).addClass('active');
	});

});