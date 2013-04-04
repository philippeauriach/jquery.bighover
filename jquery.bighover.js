/*Copyright (C) 2013 Philippe Auriach - p.auriach@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of 
this software and associated documentation files (the "Software"), to deal in 
the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS 
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER 
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

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