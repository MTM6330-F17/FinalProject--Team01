jQuery(document).ready(function($){
	// TO show and hide go to top button, need css for this
   var scroll_start = 0;
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();
      // change nav background to solid
      if(scroll_start > 400) {
          $('.navbar').addClass('active');
       } else {
          $('.navbar').removeClass('active');
       }
      // display back to top button
      if(scroll_start > 100) {
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
        e.preventDefault();
        $("nav .menu-item").toggleClass('show');
	});
    $("nav .menu-item").on('click',function(){
        $("nav .menu-item").toggleClass('show');
    });

});
