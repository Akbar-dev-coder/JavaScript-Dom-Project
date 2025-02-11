let clock = document.getElementById("clock");

clock.addEventListener("load", currentTime);

function currentTime() {
  let date = new Date();
  let hours = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  const html = `<span>${hours} :</span>
    <span>${minute} :</span>
    <span>${second} </span>
  `;
  clock.innerHTML = html;
}

setInterval(currentTime, 1000);
