var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".nav-outer").style.top = "0";
    document.querySelector(".nav-outer").style.opacity = "1";
  } else {
    document.querySelector(".nav-outer").style.top = "-60px";
    document.querySelector(".nav-outer").style.opacity = "0";
  }
  prevScrollpos = currentScrollPos;
}

const sec = document.querySelectorAll(".section");

var getScroll = [];

const displayScrollElement = (element) => {
  element.classList.add("add-animate");
};

const hideScrollElement = (element) => {
  element.classList.remove("add-animate");
};

// getSectionByScroll(getScroll);
handleAnimation();
window.addEventListener("scroll", () => {
  handleAnimation();
});

// function getSectionByScroll(getHeight) {
//   let secNum = sec.length;
//   for (let i =0;i<secNum;i++){
//     getHeight[i] = sec[i].scrollTop;
//   }
//   console.log(secNum);
// }
console.log(sec);
function handleAnimation() {
  document.querySelectorAll(".section").forEach((el) => {
    getSectionHeight(el);
  })
  console.log("a");
}
function getSectionHeight(el) {
  let getTop = el.getBoundingClientRect().top;
  let getHeight = el.getBoundingClientRect().height / 3;
  let getBottom = el.getBoundingClientRect().bottom;
  if (getTop < getHeight && getBottom > getHeight) {
    displayScrollElement(el);
  }
  else {
    hideScrollElement(el);
  }
  console.log("getTop = "+getTop);
  console.log("getBottom = "+getBottom);
}