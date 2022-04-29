// 2차 sub메뉴 보이고 사라지게

$('header nav ul li').hover(function(){
  $(this).find('.sub').stop().slideDown()
},function(){
  $(this).find('.sub').stop().slideUp();
})

// bx-slider 옵셥 메인 슬라이더, 피자메뉴 슬라이더

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

// 콘텐츠 이미지영역 텍스트영역 담기
$(function(){
  let text_area = $('.contents > ul.text_area > li');
  let img_area = $('.contents > ul.img_area li');
  img_area.hide().eq(0).show(); //이미지 모두숨기고 이미지의 0번만 보이기
  
  //텍스트영역 index 를target에 담고 index에 맞는 이미지 fadeIn
  text_area.mouseenter(function(){
      let target = $(this).index();
      img_area.hide().eq(target).fadeIn();
      })
    })
      
  })



// 스크롤이 2100보다 커지면 .move 실행되게 함.
      $(window).scroll(function(){
        let wscroll = $(this).scrollTop();
        
        if(wscroll > 2100){
          $('.left , .right').each(function(){
            let scroll = $(this);
            setTimeout(function(){
              scroll.addClass('move');
            });
          })
        }
      });
      