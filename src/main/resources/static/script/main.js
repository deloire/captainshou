let myImg = document.querySelector("img");

myImg.onclick = function() {
  let imgSrc = myImg.getAttribute("src");

  if (imgSrc === "/img/logo.jpg") {
    myImg.setAttribute("src", "/img/logo2.jpeg");
  } else {
    myImg.setAttribute("src", "/img/logo.jpg");
  }
};
