window.onload=function(){
  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",  //设置slider容器能够同时显示的slides数量(carousel模式)
    grabCursor: true,  //变手掌形状
    centeredSlides: true, //设定为true时，active slide会居中，而不是默认状态下的居左。
    slidesPerView: "auto",
    coverflowEffect: {
      // slide做3d旋转时Y轴的旋转角度
      rotate: 50,
      // 每个slide之间的拉伸值，越大slide靠得越紧。
      stretch: 0, 
      // slide的位置深度。值越大z轴距离越远，看起来越小。
      depth: 100, 
      // depth和rotate和stretch的倍率，相当于depth*modifier、rotate*modifier、stretch*modifier，值越大这三个参数的效果越明显
      modifier: 1,
      // true	是否开启slide阴影
      slideShadows: true,
    },
    // 使用分页器导航。分页器可使用小圆点样式（默认）
    pagination: {
      el: ".swiper-pagination",
    },
  });
}

$(document).ready(
  function()
  {
    $('.swiper-slide a').lightBox({},1000);
  });
