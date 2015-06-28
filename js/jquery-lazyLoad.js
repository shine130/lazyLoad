(function(){
	$.fn.lazyLoad=function(options){
		var defaults={
			attr:'data-url',
			container:$(window)
		},
		opts=$.extend(defaults,options);
	}
})(jQuery)