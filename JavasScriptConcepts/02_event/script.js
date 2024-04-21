let div1 = document.getElementById("div1");
div1.addEventListener("click", function () {
  console.log("Div1 is clicked");
});
div1.addEventListener("mouseover", function (evt) {
    console.log(evt);
  console.log("Div1 is mouseover");
});
