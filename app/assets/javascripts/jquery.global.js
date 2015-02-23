(function ($) {
    "use strict";
	
	$(window).load(function() {
	
	/* ==============================================
	Preloader
	=============================================== */
		var preloaderDelay = 350,
			preloaderFadeOutTime = 800;
	
		function hidePreloader() {
			var loadingAnimation = $('#loading-animation'),
				preloader = $('#preloader');
			loadingAnimation.fadeOut();
			preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
		}
		hidePreloader();
		
		
	/* ==============================================
	Grab captions
	=============================================== */	
		$('.photosetgrid img').each( function() {
		
			var imageCaption = $(this).attr("alt");
			
			console.log(imageCaption);			
			
			$(this).parent().attr("title" , imageCaption);
		
		});
		
	});
	
	$(document).ready(function() {
	/* ==============================================
	Full Page Image Slider
	=============================================== */
		$('body.home').backstretch(["assets/bodybkg1.jpg", "assets/bodybkg2.jpg", "assets/bodybkg3.jpg"], {
			duration: 4000,
			fade: 750
		});
		
		$('#home').css('height', $(window).height());
		
	/* ==============================================
	Article Photo Set Grid Plugin
	=============================================== */
		
		$('.photosetgrid').photosetGrid({
			highresLinks: true,
			rel: 'gallery',
			gutter: '5px',
			onComplete: function() {
				$('.photosetgrid').attr('style', '');
				$('.photosetgrid a').swipebox({hideBarsOnMobile : false})
			}
		});

	/* ==============================================
	Parallax
	=============================================== */
		
		$(window).bind('scroll', function(e) {
			
			parallaxScroll();
		});
		
	
		function parallaxScroll() {
		
			var currWidth = $(window).width();
		
			if (currWidth >= 700) {
			
				var scrolledY = $(window).scrollTop();
				$('.parallaxbkg').css('background-position', 'center -' + ((scrolledY * 0.2)) + 'px');
				$('.parallax').css('bottom', '+' + ((scrolledY * 0.2)) + 'px');
				
			}
			
		};
		
	/* ==============================================
	Scroll up button
	=============================================== */
		jQuery(window).scroll(function() {
			if (jQuery(this).scrollTop() > 100) {
				jQuery('.scrollup').fadeIn();
			} else {
				jQuery('.scrollup').fadeOut();
			}
		});
		
	/* ==============================================
	Lightbox
	=============================================== */
		$('.swipebox').swipebox({hideBarsOnMobile : false});
		
	/* ==============================================
	Animated Elements
	=============================================== */
		$('#statswrap').waypoint(function(direction) {
			$('.timer').countTo();
			}, {triggerOnce: true, offset: '65%'
		});
		
	/* ==============================================
	Smooth Scroll
	=============================================== */
		$('a').smoothScroll();
		
	/* ==============================================
	Navigation
	=============================================== */
	
		$('#menuoverlay').css({
		height: $(window).height(),
		});

		$('#navtrigger').click(function() {
			$('#menuoverlay').toggleClass('active');
			$('#navtrigger').toggleClass('selected')
		});
		
	/* ==============================================
	Load More Ajax
	=============================================== */
		
		$('.btn.load').on( 'click' , function ( e ) {
	
			e.preventDefault();
			
			var buttonUrl = $(this).attr('href');
		
			$(this).parent().find( '.load-panel' ).load( buttonUrl, function( response, status, xhr ) {
			  if ( status == "error" ) {
			    var msg = "Sorry but there was an error: ";
			    $( this ).append( msg + xhr.status + " " + xhr.statusText );
			  }
			});
			
			$(this).fadeOut();
			$(this).parent().find( '.load-panel' ).delay(500).animate( { opacity: 1 } );
		
		});
		
	});

}(jQuery));