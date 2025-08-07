const image = document.getElementById("image");
const off = document.getElementById("off");
const on = document.getElementById("on");

off.addEventListener("click", () => {
  image.src = "image/pic_bulboff.gif";
});

on.addEventListener("click", () => {
  image.src = "image/pic_bulbon.gif";
});
