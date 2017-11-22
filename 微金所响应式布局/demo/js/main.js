
$(function () {
    	function resizeFn() {
       var screenWidth=$(window).width();
       var isScreen=screenWidth<768;
       $('#carousel-example-generic > .carousel-inner > .item').
       each(function (index,el) {
       	var srcImage=isScreen ? $(el).data('image-xs') : $(el).data('image-lg');
	         $(el).css({
	         	'backgroundImage' : 'url('+srcImage+')'
				      });
				      if(isScreen) {
				      	  $(el).html('<img src="'+srcImage+'" alt="轮播图片" />');
				      } else {
				      	  $(el).html('');
				      }  
	      });	  
	    }
	 	$(window).on('resize',resizeFn).trigger('resize');
	 	// 提示工具
	 	 $('[data-toggle="tooltip"]').tooltip();

	 	//tab选线卡;
	 	function tab() {
	 		var li=$('.nav-tabs li');
		 	var tab_width=0;
		 	li.each(function(index,element) {
		 		tab_width+=element.offsetWidth;
		 	});
		 	if($(window).width()<768) {
		 		$('.nav-tabs').css({
		 		'width':tab_width+'px'
		 	    });
		 	} else {
		 		$('.nav-tabs').css({
		 			'width':''
		 		});
		 	}
		 	
	 	}
	 	$(window).on('resize',tab).trigger('resize');

	 	//新闻开头
	 	$('#news .nav-stacked a').on('click',function () {
	 		    var value=$(this).data('title');
                $('#news .news-title').text(value);
	 	});
	 	//手机触摸滑动;
	 	var startx=0,endx,offset=50;
	 	$('.carousel').on('touchstart',function (e) {
            startx=e.originalEvent.touches[0].clientX;
	 	});
	 	$('.carousel').on('touchmove',function (e) {
            endx=e.originalEvent.touches[0].clientX;
	 	});
	 	$('.carousel').on('touchend',function (e) {
           if(Math.abs(startx-endx)>=50) {
           	  $(this).carousel(startx>endx ? 'next':'prev');
           }
	 	});

});

/*
；*/