//creating a new date object
function time() {
  const currentDate = new Date();

  const time = document.getElementById("time");

  time.innerHTML = currentDate.toLocaleTimeString();
}
setInterval(time, 1000);
