$(function(){

  // 헤더 fixed
  var $header = $("header");
  var header_top = $header.offset().top;  
  $(window).scroll(function(){
    if($(this).scrollTop() >= header_top){
      $header.addClass("fixed");
    } else {
      $header.removeClass("fixed");
    }
  })

  // gnb 메뉴
  var $gnb_area = $(".gnb_area");
  var $btn_open_all = $gnb_area.find(".btn_open_all");
  $btn_open_all.click(function(){
    $gnb_area.toggleClass("on");
  })

  // 사이드 메뉴 열고 닫기 
  var $btn_open_side = $(".btn_open_side");
  var $menu_area = $(".menu_area");
  var $menu_bg = $(".menu_bg");
  var $btn_close_side = $menu_area.find(".btn_close");
  $btn_open_side.click(function(){
    $("body").addClass("hide");
    $menu_area.addClass("on");
    $menu_bg.addClass("on");
  })

  $btn_close_side.click(function(){
    $("body").removeClass("hide");
    $menu_area.removeClass("on");
    $menu_bg.removeClass("on");
  })

  $menu_bg.click(function(){
    $("body").removeClass("hide");
    $menu_area.removeClass("on");
    $menu_bg.removeClass("on");
  })

  // 사이드 메뉴 클릭
  var $side_gnb = $menu_area.find(".list> ul> li> a");
  $side_gnb.click(function(e){    
    if(!$(this).hasClass("empty")){
      e.preventDefault();
      
      $(this).parent().toggleClass("on");
      $(this).siblings(".depth_01").slideToggle(300);
    };
  })
  
  // 검색영역
  var $srh = $(".srh_area");
  var $btn_open_srh = $(".btn_open_srh");
  var $btn_close_srh = $srh.find(".btn_close");
  $btn_open_srh.click(function(){
    $srh.addClass("on");
  })
  $btn_close_srh.click(function(){
    $srh.removeClass("on");
  })
  
  
  // 퀵 메뉴
  var playing = false;
  var $quick = $(".quick_area");
  var currentTop = $(window).scrollTop();
  $(window).scroll(function(e){    
    if(playing == true){
      return;
    }

    playing = true;
    if(currentTop < $(this).scrollTop()){
      $quick.fadeOut(function(){
        playing = false;
      });
    } else{
      $quick.fadeIn(function(){
        playing = false;
      });
    }
    
    currentTop = $(this).scrollTop();
  })

  // 상단 이동 버튼
  var $btn_top = $(".btn_top");
  $btn_top.click(function(){
    $("html, body").stop().animate({
      scrollTop : 0
    })
  })

  // swiper
  var swiper1 = new Swiper(".gnb_area .swiper", {
    observer: true,
    observeParents: true,
    spaceBetween: 20,
    freeMode: true,
    slidesPerView: "auto"
  });
  
  var swiper2 = new Swiper(".sc_visual .swiper", {
    loop: true,
    effect: 'fade',
    pagination: {
      el: ".sc_visual .pagination",
    },
    autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true,
      disableOnInteraction: false
    },
  });
  
  var swiper3 = new Swiper(".sc_cate .swiper", {
    slidesPerView: 2.3,
    spaceBetween: 10,
    freeMode: true,
  });
});
