jQuery(document).ready(function($) {

  //Dummy tags for autocomplete search feature
  // add functionality on the search element
  // probably the whole searching can be done with something like:
  // https://github.com/Gbuomprisco/ngx-chips
  // https://material.angular.io/components/chips/overview
  // https://stackblitz.com/edit/ngx-chips-example
  
	// $( function() {
  //   var availableTags = ['Sequence analysis', 'Sequencing', 'Gene expression', 'Molecular interactions, pathways and networks', 'Proteomics', 'Genomics', 'Proteins', 'Genetics', 'DNA', 'Mapping', 'Proteomics experiment', 'Bioinformatics', 'Genetic variation', 'RNA-Seq', 'Structure prediction', 'Small molecules', 'Data management', 'Model organisms', 'RNA', 'Data visualisation', 'Statistics and probability', 'Gene transcripts', 'Protein interactions', 'Microarray experiment', 'Protein structure analysis', 'Database management'];
  //   $( ".bio-top-section .bio-search-container input.form-search" ).autocomplete({
  //     source: function(request, response) {
  //       var results = $.ui.autocomplete.filter(availableTags, request.term);
  //       response(results.slice(0, 5));
  //   },
  //   appendTo: "#bio-search-autocomplete"
  //   });
  // } );

	// //Grab url parameter for tags
  // var getUrlParameter = function getUrlParameter(sParam) {
	//     var sPageURL = window.location.search.substring(1),
	//         sURLVariables = sPageURL.split('&'),
	//         sParameterName,
	//         i;

	//     for (i = 0; i < sURLVariables.length; i++) {
	//         sParameterName = sURLVariables[i].split('=');

	//         if (sParameterName[0] === sParam) {
	//             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
	//         }
	//     }
	// };

	// var tags = getUrlParameter('q');

  // //If tags exist, prepend to search container
  // // don't know if we can use this... need to do pills/tags as it's done in the old design
	// if(tags != ""){
	// 	if(tags != undefined){
	// 		$( ".bio-top-section .bio-search-container" ).prepend( '<div class="bio-tags"><span class="tag">' + tags + '<span class="remove"></span></span> </div>' );
	// 		var tagWidth = $(".bio-top-section .bio-search-container .bio-tags .tag").outerWidth() + 20;
	// 		$(".bio-top-section .bio-search-container form").css("padding-left", tagWidth);			
	// 	}
	// }

	//Remove tags on click
	// $( ".bio-top-section .bio-search-container .tag .remove" ).click(function() {
	//   window.location = window.location.href.split("?")[0];
	// });

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
  // function stickyMenu() {
  //   var header = $('section.bio-top-section .sticky-menu'); 
  //   if ($(window).scrollTop() > 750) 
  //     header.addClass('scroll'); 
  //   else
  //     header.removeClass('scroll'); 
  // }

  // $(window).scroll(stickyMenu);
  // stickyMenu();

  //Filters (search page)
  // Add a (click)="someFunction()" and in the someFunction add/remove the class which is
  // linked to an object on the same html elements
  // https://stackoverflow.com/questions/37891752/angular2-add-class-to-item-on-click/37891984
  //https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/
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
  // Add a (click)="someFunction()" and in the someFunction add/remove the class which is
  // linked to an object on the same html elements
  // https://stackoverflow.com/questions/37891752/angular2-add-class-to-item-on-click/37891984
  //https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/
  $( ".sidebar-grid .left-sidebar .collapse-toggle" ).click(function() {
  	$('.sidebar-grid').addClass("collapse");
  });

  $( ".sidebar-grid .expand-toggle" ).click(function() {
  	$('.sidebar-grid').removeClass("collapse");
  });

  //Expand / collapse sort (mobile)
  //Expand / collapse filters
  // Add a (click)="someFunction()" and in the someFunction add/remove the class which is
  // linked to an object on the same html elements
  // https://stackoverflow.com/questions/37891752/angular2-add-class-to-item-on-click/37891984
  //https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/
  $( ".sidebar-grid .sort-toggle-mobile" ).click(function() {
  	$('.bio-top-section .bio-top-options').addClass("display");
  });

  $( ".bio-top-section .bio-top-options .collapse-toggle" ).click(function() {
  	$('.bio-top-section .bio-top-options').removeClass("display");
  });

  //Search grid
  // sets outer with, see:
  // https://api.jquery.com/outerWidth/
  // for some divs in the table view
  // in angular probably best to use #something  and ViewChild to get it to work
  // https://stackoverflow.com/questions/48708119/how-to-get-width-of-dom-element-in-angular-4-after-page-is-loaded?rq=1

  var tableWidth = 0;
	$('section.sidebar-grid .main-content .bio-search-grid .table-header > div').each(function(n,v){
		tableWidth += $(this).outerWidth(); 
  });
  $('section.sidebar-grid .main-content .bio-search-grid .bio-table-container .bio-table').css('min-width', tableWidth);

  //Expand / collapse column filters (search grid)
  //Expand / collapse filters
  // Add a (click)="someFunction()" and in the someFunction add/remove the class which is
  // linked to an object on the same html elements
  // https://stackoverflow.com/questions/37891752/angular2-add-class-to-item-on-click/37891984
  //https://codecraft.tv/courses/angular/built-in-directives/ngstyle-and-ngclass/
  // also search for outerWidth here:
  // http://youmightnotneedjquery.com/
  $( ".sidebar-grid .edit-cols-toggle" ).click(function() {
    $('div.column-filters-container').addClass("display");
  });

  $( "div.column-filters-container .collapse-toggle" ).click(function() {
    $('div.column-filters-container').removeClass("display");
  });

  // 'read more' button on tool page (expand - collapse)
  // add a click on the element so that it switches from read more to read less
  // and it adds and removes classes (we also need to check if the expand class works in angular)
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

  // Detect which functions has content (tool page)
  // add class if some condition is met
  // look for condition in a variable and keep the value of n somewhere
  // set class if the variable is good

  // In angular we could actually do this looking at the actual (JSON) content
  // instead of some HTML content
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
  // same as read more / read less above
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