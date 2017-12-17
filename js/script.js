jQuery(document).ready(function($){
	// TO show and hide go to top button, need css for this
   var scroll_start = 0;
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      // change nav background to solid
      if(scroll_start > 420) {
          $('.navbar').addClass('active');
       } else {
          $('.navbar').removeClass('active');
       }
      // display back to top button
      if(scroll_start > 350) {
      	$('#topbtn').fadeIn();
      }else{
      	$('#topbtn').fadeOut();
      }
   });

   /* Smooth Scroll to the div with ID */
$('a[href*=\\#]').click(function(e) {
		// Chnage the URL
	    if (location.pathname.replace('/^\//','') == this.pathname.replace('/^\//','') && location.hostname == this.hostname) {
	    	// get the #name
	        var hash = this.hash;
	        // set #name to the target
	        var $target = $(this.hash);
	        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
	        if ($target.length) {
	            $('.active').removeClass('active');
	            $(this).parent().addClass('active');
	            var targetOffset = $target.offset().top - 120;
	            $('html,body').animate({
	                scrollTop: targetOffset
	            }, 1000, function() {
	            	// Set the URL to be location of the page /#idName
	                location.hash = hash;
	            });
	            e.preventDefault();

	        }
	    }
	});

	/* Hamburger Menu show and hide */
	$('#hammenu').on('click',function(e){
        e.preventDefault(); //this is always for anchor tag as it will prevent it to open the link
        $("nav ul").slideToggle();
	});
    $("nav .menu-item").on('click',function(){
        $("nav ul").slideToggle();
    });
/*---ACCORDIAN ------*/
//adding click event to the class name .accordiontitle
$('.accordion').on('click',function(e){
    if($(this).hasClass('expanded')){

      $(this).children('.accordion-content').slideToggle();
      $(this).children('.accordion-content').removeClass('expanded');
      $(this).children('.accordion-title').children('span').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    }else{

      $('.expanded').children('.accordion-content').slideToggle();
      $('.expanded').children('.accordion-title').children('span').removeClass('fa-chevron-up').addClass('fa-chevron-down');
      $('.expanded').removeClass('expanded');


      $(this).children('.accordion-content').slideToggle();

      $(this).addClass('expanded');

      $(this).children('.accordion-title').children('span').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    }
  });
});
