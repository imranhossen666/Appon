
$('.banner-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });
  

  $('.screenshort-main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });





  $('.feed-text-box-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.feed-profile'
  });
  $('.feed-profile').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    asNavFor: '.feed-text-box-main',
    centerMode: true,
    centerPadding: '10px',
  });
  



// let section = document.querySelectorAll("section")
// let ulLi = document.querySelectorAll(".menu-style ul li a")

// window.onscroll = () => {
//   section.forEach(sec => {
//     let top = window.scrollY
//     let offset = sec.offsetTop
//     let height = sec.offsetHeight
//     let id = sec.getAttribute("id")

//     if(top >= offset && top < offset + height){
//       ulLi.forEach(links => {
//         links.classList.remove("active")
//         document.querySelector("menu-style ul li a ").classList.add("active")
//       })
//     }
//   })
// }



  
