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

(function($) {
//
// plugin definition
//
$.fn.bighover = function(options) {
	// build main options before element iteration
	var opts = $.extend({}, $.fn.bighover.defaults, options);
	// iterate and reformat each matched element
	return this.each(function() {
		//$this = $(this);
		// build element specific options
		var o = $.meta ? $.extend({}, opts, $(this).data('bighover')) : opts;

		$(this).unbind('mouseenter mousemove mouseleave');

		$(this).hover(function(){
			//mouse enter image
			if(typeof o.originalHeight === 'undefined' || o.originalWidth === 'undefined'){
				o.originalHeight = o.height;
				o.originalWidth = o.width;
			}

			$("body").after($('<img />').attr('src', $(this).attr('src')).attr('id', 'bighoverImage'));

				//define css based on o
				var width = o.width;
				var height = o.height;
				if(width=='auto' && height=='auto'){

				}else{
					if(width != 'auto'){
						width = width+"px";
					}
					if(height != 'auto'){
						height = height + "px";
					}
				}

				$('#bighoverImage').css({
					width		: width,
					height		: height,
					position	: 'fixed',
					'z-index'	: 99
				});
			}, function(){
			//mouse leave image, so remove the zoomed one
			$('#bighoverImage').remove();
		});

		$(this).mousemove(function(e){
			//called when the mouse move
			console.log(e.pageY-$(window).scrollTop());

			//get original defined width, in case they move after
			if(o.originalHeight=='auto'){
				o.originalHeight = $('#bighoverImage').height();
			}
			if(o.originalWidth=='auto'){
				o.originalWidth = $('#bighoverImage').width();
			}

			var originalHeight = o.originalHeight;
			var originalWidth = o.originalWidth;
			var imageHeight = $('#bighoverImage').height();
			var imageWidth = $('#bighoverImage').width();
			var windowHeight = $(window).height();
			var windowWidth = $(window).width();

			if(o.position=='right'){
				var bestX = e.pageX+15;
				var bestY = e.pageY-(imageHeight/2) -$(window).scrollTop();
				
				$('#bighoverImage').css({
					left	: bestX+'px',
					top		: bestY+'px',
					right 	: 'auto',
					bottom 	: 'auto'
				});
			}else if(o.position=='top-right'){
				var bestX = e.pageX+15;
				var bestY = windowHeight-e.pageY+15 +$(window).scrollTop();
				
				$('#bighoverImage').css({
					left	: bestX+'px',
					top		: 'auto',
					right 	: 'auto',
					bottom 	: bestY+'px'
				});
			}else if(o.position=='top'){
				var bestX = e.pageX-(imageWidth/2);
				var bestY = windowHeight-e.pageY+15 +$(window).scrollTop();
				
				$('#bighoverImage').css({
					left	: bestX+'px',
					top		: 'auto',
					right 	: 'auto',
					bottom 	: bestY+'px'
				});
			}else if(o.position=='top-left'){
				var bestX = windowWidth-e.pageX+15;
				var bestY = windowHeight-e.pageY+15 +$(window).scrollTop();
				
				$('#bighoverImage').css({
					left	: 'auto',
					top		: 'auto',
					right 	: bestX+'px',
					bottom 	: bestY+'px'
				});
			}else if(o.position=='left'){
				var bestX = windowWidth-e.pageX+15;
				var bestY = e.pageY-(imageHeight/2) -$(window).scrollTop();
				
				$('#bighoverImage').css({
					left	: 'auto',
					top		: bestY+'px',
					right 	: bestX+'px',
					bottom 	: 'auto'
				});
			}else if(o.position=='bottom-left'){
				var bestX = windowWidth-e.pageX+15;
				var bestY = e.pageY+15 -$(window).scrollTop();
				
				$('#bighoverImage').css({
					left	: 'auto',
					top		: bestY+'px',
					right 	: bestX+'px',
					bottom 	: 'auto'
				});
			}else if(o.position=='bottom'){
				var bestX = e.pageX-(imageWidth/2);
				var bestY = e.pageY+15 -$(window).scrollTop();
				
				$('#bighoverImage').css({
					left	: bestX+'px',
					top		: bestY+'px',
					right 	: 'auto',
					bottom 	: 'auto'
				});
			}else{  //default : bottom-right
				var bestX = e.pageX+15;
				var bestY = e.pageY+15 -$(window).scrollTop();
				
				$('#bighoverImage').css({
					left	: bestX+'px',
					top		: bestY+'px',
					right 	: 'auto',
					bottom 	: 'auto'
				});
			}
		});
});
};

//
// plugin defaults
//
$.fn.bighover.defaults = {
	width: 'auto',
	height: 'auto',
	position: 'bottom-right',
	resizeAuto: true
};

})(jQuery);