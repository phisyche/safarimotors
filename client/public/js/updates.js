function updateCarousel(){
    var $owl = $('.owl');
    $owl.each( function() {
		var $carousel1 = $(this);
		$carousel1.owlCarousel({
			items : $carousel1.attr('data-items'),
			itemsDesktop : [1199,$carousel1.attr('data-itemsDesktop')],
			itemsDesktopSmall : [979,$carousel1.attr('data-itemsDesktopSmall')],
			itemsTablet:  [797,$carousel1.attr('data-itemsTablet')],
			itemsMobile :  [479,$carousel1.attr('data-itemsMobile')],
			navigation : JSON.parse($carousel1.attr('data-buttons')),
			pagination: JSON.parse($carousel1.attr('data-pag')),
			slideSpeed: 1000,
			paginationSpeed : 1000,
			navigationText : false
		});
	 });
}

function reRenderRangeSlider(){

		//Slider
		$( ".slider-range" ).slider({
			range: true,
			min: 200000,
			max: 20000000,
			step: 1000,
			values: [ 6000000, 13000000 ],
			slide: function( event, ui ) {
			   $( ".slider_amount" ).val( "KSHS " + ui.values[ 0 ].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + " - KSHS " + ui.values[ 1 ].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "KSHS1,") );
			}
		  });
		  $( ".slider_amount" ).val( "KSHS " + $( ".slider-range" ).slider( "values", 0 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "KSHS 1,") + " - KSHS " + $( ".slider-range" ).slider( "values", 1 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "KSHS1,") );
		   

		  //Search
	$('.select-wrapper li').on('click',function(){
		$(this).parents('.select-wrapper').find('button').text($(this).text());
	});

}


function reRenderRangeSliderOther(p1,p2){
	//Slider
	$( ".slider-range" ).slider({
		range: true,
		min: 200000,
		max: 20000000,
		step: 1000,
		values: [ p1, p2 ],
		slide: function( event, ui ) {
		   $( ".slider_amount" ).val( "KSHS " + ui.values[ 0 ].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "KSHS1,") + " - KSHS " + ui.values[ 1 ].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "KSHS1,") );
		}
	  });
	  $( ".slider_amount" ).val( "KSHS " + $( ".slider-range" ).slider( "values", 0 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "KSHS1,") + " - KSHS " + $( ".slider-range" ).slider( "values", 1 ).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "KSHS1,") );
	   

			//Search
		$('.select-wrapper li').on('click',function(){
			$(this).parents('.select-wrapper').find('button').text($(this).text());
		});
}