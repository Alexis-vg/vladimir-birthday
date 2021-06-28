const flameone = document.querySelector(".seven_flame");
const flametwo = document.querySelector(".one_flame");
const cake = document.querySelector(".cake");

cake.addEventListener("mouseover", function (e) {
  flameone.classList.add("seven_flame-active");
  flametwo.classList.add("one_flame-active");
});
cake.addEventListener("mouseout", function (e) {
  flameone.classList.remove("seven_flame-active");
  flametwo.classList.remove("one_flame-active");
});
