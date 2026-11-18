const hour = document.querySelector(".hour");
const hand = document.querySelector(".hand");

function tick() {
  const hours = new Date().getHours();

  hour.style.transform = "rotate(" + hours * 30 + "deg)";
  hand.style.transform = "rotate(" + hours * 30 + "deg)";
}

tick();
setInterval(tick, 1000);
