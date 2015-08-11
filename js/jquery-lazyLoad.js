/**
* @author shine
* @blog http://blog.ipsfan.com/
* @version 0.1.3
* @email:shine130@vip.qq.com
*/ 
(function($){
	$.fn.lazyLoad=function(options){
		var defaults={
			attr:'data-url',
			timeout:100
		},
			opts=$.extend(defaults,options),
			container=this,
			winObj = $(window),
			node=container.find("img["+opts.attr+"]"),
			objs=[],
			poll,
			timeOut = opts.timeout;
		node.each(function(i){
			var objTop = $(this).offset().top,
				objHeight = $(this).height() + objTop;
			objs.push([objTop,objHeight,i]);
		});

		function loader(){
			var winTop = document.documentElement.scrollTop || document.body.scrollTop,
				winHeight=document.documentElement.clientHeight + winTop,
				nodeA=container.find("img["+opts.attr+"]");
			if(nodeA.length == 0){
				winObj.unbind("scroll");
				clearTimeout(poll);
			}	
			$.each(objs,function(i){
				var objTop=objs[i][0],
				    objHeight=objs[i][1],
				    objIndex=objs[i][2];

				if((objTop <= winHeight && objHeight >= winTop)){
					var obj = node.eq(objIndex),
						imgUrl = obj.attr(opts.attr);
					obj.attr('src', imgUrl).removeAttr(opts.attr);

				}	


			})
		}
		loader();
		var deLoader = function(){
			clearTimeout(poll);
			poll = setTimeout(loader,timeOut);
		};

		winObj.bind('scroll',function(){
			deLoader();
		});

	}

})(jQuery)