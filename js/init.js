
$(document).ready(function () {
    //        ========Button To-top =======
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $(".to-top").fadeIn();
        } else {
            $(".to-top").fadeOut();
        }
    });
    $(".to-top").click(function () {
        $("body,html").animate({ scrollTop: 0 }, 800);
    });
    //        ========top header slider========
    var mySwipertop = $(".top_slider").swiper({
        mode: "vertical",
        pagination: ".top_slider_pagination-pagination",
        paginationClickable: true,
        slidesPerView: 1,
        loop: true,
    });
    $(".top_slider_pagination-prev").on("click", function (e) {
        e.preventDefault();
        mySwipertop.swipePrev();
    });
    $(".top_slider_pagination-next").on("click", function (e) {
        e.preventDefault();
        mySwipertop.swipeNext();
    });
    //        ========Swiper slider========
    var mySwiper = $(".main_catalog").swiper({
        mode: "horizontal",
        pagination: ".pag_brand3",
        paginationClickable: true,
        slidesPerView: 3,
    });
    $(".swiper-button-prev").on("click", function (e) {
        e.preventDefault();
        mySwiper.swipePrev();
    });
    $(".swiper-button-next").on("click", function (e) {
        e.preventDefault();
        mySwiper.swipeNext();
    });

    var mySwiper2 = $(".auto_brand").swiper({
        mode: "horizontal",
        pagination: ".pag_brand2",
        paginationClickable: true,
        slidesPerView: 5,
    });
    $(".swiper-button-prev2").on("click", function (e) {
        e.preventDefault();
        mySwiper2.swipePrev();
    });
    $(".swiper-button-next2").on("click", function (e) {
        e.preventDefault();
        mySwiper2.swipeNext();
    });

    var mySwiper3 = $(".brand_slider").swiper({
        mode: "horizontal",
        createPagination: true,
        pagination: ".pag_brand",
        paginationAsRange: true,
        paginationClickable: true,
        slidesPerView: 7,
        loop: true,
    });
    $(".swiper-button-prev3").on("click", function (e) {
        e.preventDefault();
        mySwiper3.swipePrev();
    });
    $(".swiper-button-next3").on("click", function (e) {
        e.preventDefault();
        mySwiper3.swipeNext();
    });

    var mySwiper4 = $(".catalog_acsses").swiper({
        mode: "horizontal",
        createPagination: true,
        pagination: ".pag_brand4",
        paginationAsRange: true,
        paginationClickable: true,
        slidesPerView: 4,
    });
    $(".swiper-button-prev4").on("click", function (e) {
        e.preventDefault();
        mySwiper4.swipePrev();
    });
    $(".swiper-button-next4").on("click", function (e) {
        e.preventDefault();
        mySwiper4.swipeNext();
    });

    var mySwiper5 = $(".catalog_hydravlic").swiper({
        mode: "horizontal",
        createPagination: true,
        pagination: ".pag_brand5",
        paginationAsRange: true,
        paginationClickable: true,
        slidesPerView: 4,
    });
    $(".swiper-button-prev5").on("click", function (e) {
        e.preventDefault();
        mySwiper5.swipePrev();
    });
    $(".swiper-button-next5").on("click", function (e) {
        e.preventDefault();
        mySwiper5.swipeNext();
    });
    //===========Left sidebar======

    var item = $(".menu_item");
    var items = $(".nav-stacked").find(".menu_item");
    item.click(function () {
        $(this).toggleClass("active");
        items.not(this).removeClass("active");
        $(this).next(".menu_collaps").slideToggle("slow");
        $(".nav-stacked .menu_collaps:visible")
            .not(".active+.menu_collaps")
            .slideUp("slow");
    });

    var visiblCl = $(".swiper-visible-switch");
    var countPag = $(".swiper-pagination");

    for (var i = 2; i <= 5; i++) {
        var pagCL = $(".pag_brand" + i);
        var valon = pagCL.find(visiblCl).length;
        var counSp = valon * -1;
        pagCL.find("span:gt(" + counSp + ")").hide();
    }
});
