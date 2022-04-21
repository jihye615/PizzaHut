$('.bx-wrapper').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 2000
});
$(document).ready(function(){
    $('.pizza_menu').bxSlider({
        mode: 'horizontal',
        captions: true,
        speed : 800,
        auto : true,
        minSlides : 4,
        maxSlides : 4,
        slideWidth : 800,
        pager : false,
        controls : true,
        moveSlides : 1,

      });

      $(window).scroll(function(){
        let wscroll = $(this).scrollTop();
        
        if(wscroll > 2100){
          $('.left , .right').each(function(){
            let icon = $(this);
            setTimeout(function(){
              icon.addClass('move');
            },100);
          })
        };
      
      });
      
      $('header nav ul li').hover(function(){
        $(this).find('.sub').stop().slideDown()
    },function(){
        $(this).find('.sub').stop().slideUp();
    })

    $(function(){
      var text_area = $('.contents > ul.text_area > li');
      var img_area = $('.contents > ul.img_area li');
      img_area.hide().eq(0).show();

      text_area.mouseenter(function(){
          var target = $(this);
          var index = target.index();
          text_area.removeClass('on');
          target.addClass('on');
          img_area.hide().eq(index).fadeIn();
      })
  })
    
})