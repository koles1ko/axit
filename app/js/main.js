$(function(){

  $('.header__burger').on('click', function(){
    $('.header__list').slideToggle();
  }); //Для бургера!

  //   $('.class').slick({
  //   dots: true,
  //   arrows: false,
  //   slidesToShow: 4,
  //   slidesToScroll: 4,
  // }); Обычный одиночный слайдер!

	//  $('.slider-for').slick({
	//   slidesToShow: 1,
	//   slidesToScroll: 1,
	//   arrows: false,
	//   fade: true,
	//   asNavFor: '.slider-nav'
	// });
	// $('.slider-nav').slick({
	//   slidesToShow: 3,
	//   slidesToScroll: 1,
	//   asNavFor: '.slider-for',
	//   dots: true,
	//   centerMode: true,
	//   focusOnSelect: true
	// }); Двойной слайдер!


  // $('.wrapper .tab').on('click', function(event) {
  // var id = $(this).attr('data-id');
  //   $('.wrapper').find('.tab-item').removeClass('active-tab').hide();
  //   $('.wrapper .tabs').find('.tab').removeClass('active');
  //   $(this).addClass('active');
  //   $('#'+id).addClass('active-tab').fadeIn();
  //   return false;
  // }); //Для табов!
  $(function () {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .closest('div.tabs')
        .find('div.tabs__content')
        .removeClass('active')
        .eq($(this).index())
        .addClass('active');
    });

  });

});