document.addEventListener('DOMContentLoaded', function(){

  var prevScrollpos = window.pageYOffset;
  const sec = document.querySelectorAll(".section");
  const menuButton = document.querySelector(".menu-buttom");
  const menuList = document.querySelector(".menu-list");

  const displayScrollElement = (element) => {
    element.classList.add("add-animate");
  };

  const hideScrollElement = (element) => {
    element.classList.remove("add-animate");
  };

  window.addEventListener("onresize", () => {
    menuButton.querySelector(".ham").classList.remove("menu-open");;
    menuList.classList.remvoe("nav-list-open");
    let widthElement = window.innerWidth;
    if (innerWidth >= 768){

    }
    console.log("aaaa");
  });

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.querySelector(".nav-outer").style.top = "0";
      document.querySelector(".nav-outer").style.opacity = "1";
    } else {
      document.querySelector(".nav-outer").style.top = "-60px";
      document.querySelector(".nav-outer").style.opacity = "0";
    }
    prevScrollpos = currentScrollPos;
  }

  handleAnimation();
  window.addEventListener("scroll", () => {
    handleAnimation();
    console.log("a");
  });

  function handleAnimation() {
    sec.forEach((el) => {
      getSectionHeight(el);
    })
  }
  function getSectionHeight(el) {
    let getTop = el.getBoundingClientRect().top;
    let getHeight = el.getBoundingClientRect().height;
    let getBottom = el.getBoundingClientRect().bottom;
    if (getTop < getHeight && getBottom > 0) {
      displayScrollElement(el);
    }
    else {
      hideScrollElement(el);
    }
    console.log(getTop);
  }
  /*navbar*/

  menuButton.addEventListener("click", () => {
    this.querySelector(".ham").classList.toggle("menu-open");
    menuList.classList.toggle("nav-list-open");
  });

  /*navbar end*/

});