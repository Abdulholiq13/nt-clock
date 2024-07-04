const title = document.querySelector('.title');

function clock() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let result = [hours, minutes, seconds].map((i) => i.toString().padStart(2, '0')).join(':');
  title.textContent = result;
}

setInterval(() => {
  clock();
}, 1000);
