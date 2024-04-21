//  addEventListener is latest way to add event listener to the element
// addEventListener is more flexible than the traditional way of adding event listener
// addEventListener can add multiple event listener to the same element
let div1 = document.getElementById("div1");
div1.addEventListener("click", function () {
  console.log("Div1 is clicked");
});
div1.addEventListener("mouseover", function (evt) {
    console.log(evt);
  console.log("Div1 is mouseover");
});
