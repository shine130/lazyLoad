/**
* @author shine
* @blog http://blog.ipsfan.com/
* @version 0.1
*/ 
(function($){
	$.fn.lazyLoad=function(options){
		var defaults={
			attr:'data-url'
		},
			opts=$.extend(defaults,options),
			winObj=$(window),
			winH=winObj.height(),
			container=this,
			node=container.find("img["+opts.attr+"]"),
			objs=[];
		node.each(function(i){
			var url=$(this).attr(opts.attr),
				data={
					url:url,
					obj:$(this)
				};
			objs.push(data);
		});

		function loader(){
			var winHeight=winH+winObj.scrollTop();
			$.each(objs,function(i,data){
				var obj=data.obj,
					url=data.url,
					objTop;
				if(obj){
					objTop=obj.offset().top;
					if(objTop>=0 && objTop<winHeight){
						obj.attr("src",url);
						data.obj=null;
					};
				}
			})
		}
		loader();
		winObj.bind('scroll',loader);

	}
})(jQuery)