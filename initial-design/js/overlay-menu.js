jQuery(document).ready(function($) {

  //Toggle menu overlay
  $( "section.bio-top-section > header div.menu-toggle, section.bio-top-section .sticky-menu div.menu-toggle" ).click(function() {
    menuSlide('menu');
  });

  //Toggle submenu
  $( "section.bio-menu-overlay .primary-menu nav ul li span" ).click(function() {
    var elementClass = $(this).attr('class');
    displaySubmenu(elementClass);
  });

  //Return to previous menu level
  $( ".bio-menu-overlay > .inner > .navigation > .prev-btn" ).click(function() {
    prevMenu();
  });

  //Toggle menu close
  $( ".bio-menu-overlay > .close-overlay, .bio-menu-overlay > .left-overlay" ).click(function() {
    menuClose();
  });

  //Toggle login overlay
  $( "section.bio-top-section > header span.login-toggle" ).click(function() {
    menuSlide('login');
  });

  //Toggle register overlay
  $( "section.bio-top-section > header span.register-toggle" ).click(function() {
    menuSlide('register');
  });

  //Additional register toggles
  $( "section.bio-menu-overlay > .inner .login span.register-now, section.bio-menu-overlay > .inner > .navigation .mobile-toggles .register-toggle" ).click(function() {
    menuClose();
    window.setTimeout(function(){
      menuSlide('register');
    }, 500);
  });

  //Login mobile toggle
  $( "section.bio-menu-overlay > .inner > .navigation .mobile-toggles .login-toggle" ).click(function() {
    menuClose();
    window.setTimeout(function(){
      menuSlide('login');
    }, 500);
  });
  //Menu slide in
  function menuSlide(element) {
    $('body').addClass('no-scroll');
    $('body > section.bio-menu-overlay').addClass("display");
    window.setTimeout(function(){$('body > section.bio-menu-overlay').addClass("fade-in");}, 20);
    window.setTimeout(function(){$('body > .bio-menu-overlay > .inner').addClass("slide-in");}, 250);
    if(element === 'menu'){
      $('body > .bio-menu-overlay > .inner > .navigation').addClass("display");
      var delay = 550;
      $('section.bio-menu-overlay .primary-menu nav ul li').each(function(n,v){
        var self = this;
        window.setTimeout(function(){$(self).addClass("active");}, delay += 200);
      });
    } else if (element === 'login'){
      $('body > .bio-menu-overlay > .inner > .login').addClass("display");
    } else if (element === 'register'){
      $('body > .bio-menu-overlay > .inner > .register').addClass("display");
    }
  }

  //Display submenu
  function displaySubmenu(element) {
  	$('section.bio-menu-overlay .primary-menu nav ul li').removeClass('active');
    $('section.bio-menu-overlay .navigation .prev-btn').addClass('active');
    $('section.bio-menu-overlay .navigation .mobile-toggles').addClass('fade-out');
    window.setTimeout(function(){$('section.bio-menu-overlay .navigation .mobile-toggles').addClass("hide");}, 200);
    var delay = 100;
    $('section.bio-menu-overlay > .inner > .navigation > div').each(function(n,v){
      if ( $(this).hasClass(element) ) {
        $(this).addClass("fade-in");
        $('section.bio-menu-overlay > .inner > .navigation > div.primary-menu').addClass("fade-out");
        $(this).find('nav ul li').each(function(n,v){
          var self = this;
          window.setTimeout(function(){$(self).addClass("active");}, delay += 200);
        });
      }
    });
  }

  //Return to previous menu level
  function prevMenu() {
    $('section.bio-menu-overlay > .inner > .navigation > div nav ul li').removeClass('active');
    $('section.bio-menu-overlay .navigation .prev-btn').removeClass('active');
    $('section.bio-menu-overlay > .inner > .navigation > div').removeClass("fade-in");
    $('section.bio-menu-overlay > .inner > .navigation > div').removeClass("fade-out");
    $('section.bio-menu-overlay .navigation .mobile-toggles').removeClass('hide');
    window.setTimeout(function(){$('section.bio-menu-overlay .navigation .mobile-toggles').removeClass("fade-out");}, 200);
    var delay = 400;
    $('section.bio-menu-overlay .primary-menu nav ul li').each(function(n,v){
      var self = this;
      window.setTimeout(function(){$(self).addClass("active");}, delay += 200);
    });
  }

  function menuClose() {
    $('body > .bio-menu-overlay > .inner').removeClass('slide-in');
    $('section.bio-menu-overlay > .inner > .navigation > div ul li').removeClass('active');
    $('section.bio-menu-overlay .navigation .prev-btn').removeClass('active');
    $('section.bio-menu-overlay > .inner > div').removeClass('display');
    $('section.bio-menu-overlay > .inner > .navigation > div').removeClass("fade-in");
    $('section.bio-menu-overlay > .inner > .navigation > div').removeClass("fade-out");
    window.setTimeout(function(){$('body > .bio-menu-overlay').removeClass("fade-in");}, 300);
    window.setTimeout(function(){$('body > .bio-menu-overlay').removeClass("display");}, 480);
    $('body').removeClass('no-scroll');
  }

});