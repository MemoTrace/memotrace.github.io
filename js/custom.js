
    jQuery(document).ready(function() {
        var swiperParent = new Swiper('.swiper-parent',{
            spaceBetween: 40,
            loop: true,
            pagination:{
                clickable: false
            },
            grabCursor: true,
            navigation: {
                prevEl: '.slider-arrow-left',
                nextEl: '.slider-arrow-right'
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '">0' + (index + 1) + "</span>";
                },
            },
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                992: {
                    slidesPerView: 3
                },
                1200: {
                    slidesPerView: 4
                }
            }
        });
    });
    jQuery(document).ready(function() {
        SEMICOLON.Core.viewport();
        SEMICOLON.Core.breakpoints();
        SEMICOLON.Base.menuBreakpoint();
    })
	function showModal(image) {
    var modal = document.getElementById("modal");
    var modalImage = document.getElementById("modal-image");
    modal.style.display = "block";
    modalImage.src = image.src;
    // console.log(image.src);
}

	function hideModal() {
		var modal = document.getElementById("modal");
		modal.style.display = "none";
	}
	jQuery('#ytb-video').on('click', function(e){
		e.preventDefault();

		if( jQuery(this).hasClass('video-played') ) {
			jQuery('#ytb-video').YTPPause();
		} else {
			jQuery('#ytb-video').YTPPlay();
			jQuery('.ytb-poster').stop(true,true).fadeTo( "slow", 0 );
		}

		jQuery(this).toggleClass('video-played');
	});

	function showcaseSection( element ){
		var otherElements = element.parents('.showcase-section').find('.showcase-feature'),
			elementTarget = jQuery( element.attr('data-target') ),
			otherTargets = element.parents('.showcase-section').find('.showcase-target');

		otherElements.removeClass('showcase-feature-active');
		element.addClass('showcase-feature-active');
		otherTargets.removeClass('showcase-target-active');
		elementTarget.addClass('showcase-target-active');
	}

	jQuery('.showcase-feature').hover( function(){
		showcaseSection( jQuery(this) );
	});

	jQuery(document).ready( function() {
		var pricingBikes = 1,
			days = 1,
			elementbikes = jQuery(".range-slider-bikes"),
			elementDays = jQuery(".range-slider-days");

		elementbikes.ionRangeSlider({
			grid: false,
			step: 1,
			min: 1,
			from:1,
			max: 5,
			postfix: ' Bike(s)',
			onStart: function(data){
				pricingBikes = data.from;
			}
		});

		elementbikes.on( 'change', function(){
			pricingBikes = jQuery(this).prop('value');
			calculatePrice( pricingBikes, days );
		});

		elementDays.ionRangeSlider({
			grid: false,
			step: 1,
			min: 1,
			from: 4,
			max: 30,
			postfix: ' Days',
			onStart: function(data){
				days = data.from;
				console.log(data);
			}
		});

		elementDays.on( 'onStart change', function(){
			days = jQuery(this).prop('value');
			calculatePrice( pricingBikes, days );
		});

		calculatePrice( pricingBikes, days );

		function calculatePrice( bikes, days ) {
			var pricingValue = ( Number(bikes) * 1 ) * ( Number(days) * 2 );
			jQuery('.pricing-price').html( '$'+pricingValue );
		}
	});
	jQuery(document).ready(function() {
		SEMICOLON.Core.viewport();
		SEMICOLON.Core.breakpoints();
		SEMICOLON.Base.menuBreakpoint();
	})
