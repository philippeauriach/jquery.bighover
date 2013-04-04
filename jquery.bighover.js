(function( $ ){
	$.fn.bighover = function( options ) {

		var $this = $(this);
		var data = $this.data('bighover');
		var settings = $.extend( {
			'width'		: 300,
			'height'	: 300
		}, options);

		$this.mousemove(function(e){
			var windowHeight = $(window).height();
			var bestX = e.pageX+10;
			var bestY = e.pageY+10;
			if((bestY+settings['height'])>windowHeight){
				bestY = windowHeight-settings['height'];
			}
			$('#bighoverImage').css({
				left	: bestX+'px',
				top		: bestY+'px'
			});
		});

		//do the stuff here
		$this.unbind('mouseenter mouseleave');
		return this.hover(
			//called when mouse enter the element
			function(){
				$("body").after($('<img />')
					.attr('src', this.src)
					.attr('id', 'bighoverImage')
					.css({
						width		: settings['width']+'px',
						height		: settings['height']+'px',
						position	: 'fixed',
						bottom		: '10px',
						left		: '350px',
						'z-index'	: 99		
					}));
			},
			function(){
			//called when mouse qui the element
			$('#bighoverImage').remove();
		});
	};
})( jQuery );