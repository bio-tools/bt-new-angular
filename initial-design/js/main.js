jQuery(document).ready(function($) {

	//Dummy tags for autocomplete search feature
	$( function() {
    var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];
    $( ".bio-top-section .bio-search-container input.form-search" ).autocomplete({
      source: function(request, response) {
        var results = $.ui.autocomplete.filter(availableTags, request.term);
        response(results.slice(0, 5));
    },
    appendTo: "#bio-search-autocomplete"
    });
  } );

	//Grab url parameter for tags
  var getUrlParameter = function getUrlParameter(sParam) {
	    var sPageURL = window.location.search.substring(1),
	        sURLVariables = sPageURL.split('&'),
	        sParameterName,
	        i;

	    for (i = 0; i < sURLVariables.length; i++) {
	        sParameterName = sURLVariables[i].split('=');

	        if (sParameterName[0] === sParam) {
	            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
	        }
	    }
	};

	var tags = getUrlParameter('keys');

	//If tags exist, prepend to search container
	if(tags != ""){
		if(tags != undefined){
			$( ".bio-top-section .bio-search-container" ).prepend( '<div class="bio-tags"><span class="tag">' + tags + '<span class="remove"></span></span> </div>' );
			var tagWidth = $(".bio-top-section .bio-search-container .bio-tags .tag").outerWidth() + 20;
			$(".bio-top-section .bio-search-container form").css("padding-left", tagWidth);			
		}
	}

	//Remove tags on click
	$( ".bio-top-section .bio-search-container .tag .remove" ).click(function() {
	  window.location = window.location.href.split("?")[0];
	});

	 //Smooth scrolling
  $(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        var targetname = this.hash.slice(1);
        if (target.length) {
        	$('html,body').animate({
                scrollTop: target.offset().top
              }, 1000);
          }
          return false;
        }
    });
  });

  //Sticky menu
  function stickyMenu() {
    var header = $('section.bio-top-section > .sticky-menu'); 
    if ($(window).scrollTop() > 750) 
      header.addClass('scroll'); 
    else
      header.removeClass('scroll'); 
  }

  $(window).scroll(stickyMenu);
  stickyMenu();

  //Filters (search page)
  $(".sidebar-grid.filter .left-sidebar .filter-item > .bio-checkbox-container input[type='checkbox']").each(function(n,v){
    if($(this).is(':checked')){
      $(this).parent().parent().addClass('expand');
    } else {
      $(this).parent().parent().removeClass('expand');
    }
  });
  $( ".sidebar-grid.filter .left-sidebar .filter-item > .bio-checkbox-container input[type='checkbox']" ).click(function() {
    if($(this).is(':checked')){
      $(this).parent().parent().addClass('expand');
    } else {
      $(this).parent().parent().removeClass('expand');
    }
  });

  //Expand / collapse filters
  $( ".sidebar-grid .left-sidebar .collapse-toggle" ).click(function() {
  	$('.sidebar-grid').addClass("collapse");
  });

  $( ".sidebar-grid .expand-toggle" ).click(function() {
  	$('.sidebar-grid').removeClass("collapse");
  });

  //Expand / collapse sort (mobile)
  $( ".sidebar-grid .sort-toggle-mobile" ).click(function() {
  	$('.bio-top-section .bio-top-options').addClass("display");
  });

  $( ".bio-top-section .bio-top-options .collapse-toggle" ).click(function() {
  	$('.bio-top-section .bio-top-options').removeClass("display");
  });

  //Search grid
  var tableWidth = 0;
	$('section.sidebar-grid .main-content .bio-search-grid .table-header > div').each(function(n,v){
		tableWidth += $(this).outerWidth(); 
  });
  $('section.sidebar-grid .main-content .bio-search-grid .bio-table-container .bio-table').css('min-width', tableWidth);

  //Expand / collapse column filters (search grid)
  $( ".sidebar-grid .edit-cols-toggle" ).click(function() {
    $('div.column-filters-container').addClass("display");
  });

  $( "div.column-filters-container .collapse-toggle" ).click(function() {
    $('div.column-filters-container').removeClass("display");
  });

  // 'read more' button on tool page (expand - collapse)
  $( "section.two-col-grid .inner .left-col .bio-read-expand" ).click(function() {
    var btnText = $(this).text();
    if (btnText == "Read more" ) {
        $(this).text("Read less");
        $(this).parent().parent().addClass("expand");
    } else {
        $(this).text("Read more");
        $(this).parent().parent().removeClass("expand");
    }
  });

  //Toggle note display (tool page)
  $( "section.functions .function-container .note-container .note-toggle" ).click(function() {
    $(this).parent().toggleClass('expand');
  });

  //Detect which functions has content (tool page)
  $("section.functions > .function-container").each(function(n,v){
    $($(this).find('.function-columns .function-col')).each(function(n,v){
      if($(this).find('.function-content').length){
        $(this).parent().addClass('col'+ n + '-content');
      } else {
        $(this).parent().addClass('col'+ n + '-no-content');
      }
    });
  });

  //Expand / collapse publication details
  $( ".publication-details-grid article .bio-read-expand" ).click(function() {
    var btnText = $(this).text();
    if (btnText == "Read more" ) {
        $(this).text("Read less");
        $(this).parent().parent().addClass("expand");
    } else {
        $(this).text("Read more");
        $(this).parent().parent().removeClass("expand");
    }
  });
});